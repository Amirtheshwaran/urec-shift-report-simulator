/**
 * Local fallback scoring — used when the Gemini AI endpoint is unavailable.
 * Analyzes the shift report fields against the scenario's expected items.
 */

/**
 * @param {Object} formData - the submitted form values
 * @param {Object} scenario - the current scenario object
 * @returns {{ score: number, label: string, verdict: string, strengths: string[], improvements: string[], suggestedSummary: string }}
 */
export function scoreLocally(formData, scenario) {
  const strengths = []
  const improvements = []
  let points = 0
  const maxPoints = 100

  const summary = (formData.shiftSummary || '').toLowerCase()
  const allText = Object.values(formData).join(' ').toLowerCase()

  // 1. Summary length & detail (0-25 pts)
  const wordCount = summary.split(/\s+/).filter(Boolean).length
  if (wordCount >= 80) {
    points += 25
    strengths.push('Detailed summary with good length and specificity.')
  } else if (wordCount >= 50) {
    points += 18
    strengths.push('Adequate summary length.')
    improvements.push('Add more detail to your summary — aim for 80+ words with specific times, names, and actions taken.')
  } else if (wordCount >= 25) {
    points += 10
    improvements.push('Summary is too brief. Include specific details: what happened, when, what actions were taken, and any follow-up needed.')
  } else {
    points += 3
    improvements.push('Summary is critically short. A good shift report summary should be at least 3-4 sentences covering all notable events.')
  }

  // 2. Mentions specific scenario elements (0-25 pts)
  const expectedHits = scenario.expectedItems.filter(item =>
    allText.includes(item) || summary.includes(item)
  )
  const hitRatio = expectedHits.length / scenario.expectedItems.length
  const elementPoints = Math.round(hitRatio * 25)
  points += elementPoints
  if (hitRatio >= 0.8) {
    strengths.push('Addressed most key scenario elements.')
  } else if (hitRatio >= 0.5) {
    improvements.push('Some important details from the scenario were missed. Review what you observed and ensure every notable event is documented.')
  } else {
    improvements.push('Several key scenario elements were not addressed. Re-read the scenario and clues carefully.')
  }

  // 3. Time specificity (0-15 pts)
  const timePattern = /\d{1,2}:\d{2}\s*(am|pm)?/gi
  const times = summary.match(timePattern) || []
  if (times.length >= 3) {
    points += 15
    strengths.push('Good use of specific timestamps.')
  } else if (times.length >= 1) {
    points += 8
    improvements.push('Include more specific times (e.g., "2:30 PM") for each event to create a clear timeline.')
  } else {
    points += 0
    improvements.push('No timestamps found. Always include specific times for events in your shift report.')
  }

  // 4. Professional tone check (0-10 pts)
  const casualWords = ['lol', 'idk', 'ngl', 'tbh', 'bruh', 'smh', 'gonna', 'wanna', 'kinda', 'sorta', 'stuff', 'things']
  const hasCasual = casualWords.some(w => summary.includes(w))
  if (!hasCasual && wordCount > 10) {
    points += 10
    strengths.push('Professional tone maintained throughout.')
  } else if (hasCasual) {
    points += 3
    improvements.push('Avoid casual language (e.g., "gonna", "stuff"). Keep a professional tone.')
  } else {
    points += 5
  }

  // 5. Required fields filled (0-15 pts)
  const requiredFields = ['shiftSummary', 'staffOnDuty']
  const filledRequired = requiredFields.filter(f => formData[f] && formData[f].trim().length > 0)
  const fieldRatio = filledRequired.length / requiredFields.length
  points += Math.round(fieldRatio * 15)
  if (fieldRatio < 1) {
    improvements.push('Some required fields were left blank.')
  } else {
    strengths.push('All required fields completed.')
  }

  // 6. Action items / follow-up mentioned (0-10 pts)
  const actionKeywords = ['follow-up', 'follow up', 'notify', 'notified', 'submitted', 'work order', 'reported', 'contacted', 'emailed', 'called', 'requested', 'maintenance']
  const hasActions = actionKeywords.some(k => summary.includes(k))
  if (hasActions) {
    points += 10
    strengths.push('Included follow-up actions or escalation steps.')
  } else {
    improvements.push('Include follow-up actions: who you notified, what work orders were submitted, or what still needs attention next shift.')
  }

  // Clamp score
  const score = Math.min(Math.max(Math.round(points), 0), maxPoints)

  // Label & verdict
  let label, verdict
  if (score >= 85) {
    label = 'Excellent'
    verdict = 'accept'
  } else if (score >= 70) {
    label = 'Good'
    verdict = 'accept'
  } else if (score >= 50) {
    label = 'Needs Improvement'
    verdict = 'revise'
  } else {
    label = 'Insufficient'
    verdict = 'reject'
  }

  // Ensure at least one item in each category
  if (strengths.length === 0) strengths.push('Report was submitted on time.')
  if (improvements.length === 0) improvements.push('Continue writing detailed, professional reports.')

  // Generate a suggested summary
  const suggestedSummary = `During the ${scenario.shiftType.toLowerCase()} shift at the ${scenario.facility}, the following was observed: ${scenario.clues.slice(0, 3).join('. ')}. Appropriate actions were documented and follow-up items noted for the next shift.`

  return { score, label, verdict, strengths, improvements, suggestedSummary }
}
