/**
 * Netlify serverless function: evaluate-shift-report
 * Uses Google Gemini to grade a shift report submission.
 */

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const apiKey = Netlify.env.get('GEMINI_API_KEY')
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'GEMINI_API_KEY not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const { formData, scenario } = await req.json()

    const prompt = `You are a professional UREC staff training evaluator. A trainee has just completed a shift report for a simulated scenario. Grade their report from 1-100 and provide specific, professional feedback.

SCENARIO:
Facility: ${scenario.facility}
Shift Type: ${scenario.shiftType}
Context: ${scenario.context}
Key observations the trainee should have documented:
${scenario.clues.map((c, i) => `${i + 1}. ${c}`).join('\n')}

TRAINEE'S SHIFT REPORT:
Staff: ${formData.staffOnDuty}
Date: ${formData.date}
Shift Summary: ${formData.shiftSummary || '(empty)'}
Maintenance Issues: ${formData.maintenanceIssues || '(empty)'}
Equipment Status: ${formData.equipmentStatus || '(empty)'}
Patron Interactions: ${formData.patronInteractions || '(empty)'}
Incidents/Emergencies: ${formData.incidentsOrEmergencies || '(empty)'}
Follow-Up Items: ${formData.followUpItems || '(empty)'}
Additional Notes: ${formData.additionalNotes || '(empty)'}

GRADING CRITERIA:
- Completeness (did they document all observations?) — 25 pts
- Detail & Specificity (times, numbers, locations, names) — 25 pts
- Professional Tone — 15 pts
- Action Items & Follow-Up (what they did, who they notified) — 20 pts
- Proper Use of Form Fields (information in right sections) — 15 pts

Respond ONLY with valid JSON in this exact format:
{
  "score": <number 1-100>,
  "label": "<Excellent|Good|Needs Improvement|Insufficient>",
  "verdict": "<accept|revise|reject>",
  "strengths": ["<strength 1>", "<strength 2>", ...],
  "improvements": ["<improvement 1>", "<improvement 2>", ...],
  "suggestedSummary": "<A model shift summary the trainee could learn from>"
}`

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 1024,
            responseMimeType: 'application/json',
          },
        }),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Gemini API error: ${response.status} ${errorText}`)
    }

    const data = await response.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!text) throw new Error('Empty response from Gemini')

    const result = JSON.parse(text)

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Evaluate function error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to evaluate report', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

export const config = {
  path: '/.netlify/functions/evaluate-shift-report',
}
