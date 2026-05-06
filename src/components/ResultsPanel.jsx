export default function ResultsPanel({ result, onTryAgain }) {
  const { score, label, verdict, strengths, improvements, suggestedSummary } = result

  // Score ring SVG
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  const scoreColor =
    score >= 85 ? 'var(--success)' :
    score >= 70 ? 'var(--teal)' :
    score >= 50 ? 'var(--warning)' :
    'var(--danger)'

  const verdictClass =
    verdict === 'accept' ? 'verdict-accept' :
    verdict === 'revise' ? 'verdict-revise' :
    'verdict-reject'

  const verdictText =
    verdict === 'accept' ? '✅ Report Accepted' :
    verdict === 'revise' ? '⚠️ Needs Revision' :
    '❌ Insufficient'

  return (
    <div id="results-panel">
      {/* Score Card */}
      <div className="card">
        <div className="card-header">
          <div className="card-icon">📊</div>
          <div>
            <div className="card-title">Your Results</div>
            <div className="card-subtitle">AI-powered feedback on your shift report</div>
          </div>
        </div>

        <div className="score-display">
          <div className="score-ring">
            <svg viewBox="0 0 120 120" width="130" height="130">
              <circle
                cx="60" cy="60" r={radius}
                fill="none" stroke="var(--border)" strokeWidth="8"
              />
              <circle
                cx="60" cy="60" r={radius}
                fill="none" stroke={scoreColor} strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform="rotate(-90 60 60)"
                style={{ transition: 'stroke-dashoffset 1.2s ease' }}
              />
            </svg>
            <div className="score-number">
              {score}
              <small>/ 100</small>
            </div>
          </div>

          <div className="score-label" style={{ color: scoreColor }}>{label}</div>

          <div className="score-bar-wrap">
            <div className="score-bar-track">
              <div
                className="score-bar-fill"
                style={{ width: `${score}%`, background: scoreColor }}
              />
            </div>
          </div>

          <div className={`submit-verdict ${verdictClass}`}>{verdictText}</div>
        </div>
      </div>

      {/* Feedback Card */}
      <div className="card">
        <div className="card-header">
          <div className="card-icon">💬</div>
          <div>
            <div className="card-title">Detailed Feedback</div>
            <div className="card-subtitle">Specific observations about your report</div>
          </div>
        </div>

        {strengths.length > 0 && (
          <div className="feedback-section">
            <div className="feedback-section-title">✅ Strengths</div>
            <div className="feedback-list">
              {strengths.map((s, i) => (
                <div className="feedback-item success" key={i}>
                  <span className="fi-icon">✓</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {improvements.length > 0 && (
          <div className="feedback-section">
            <div className="feedback-section-title">📌 Areas for Improvement</div>
            <div className="feedback-list">
              {improvements.map((s, i) => (
                <div className="feedback-item warning" key={i}>
                  <span className="fi-icon">→</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {suggestedSummary && (
          <div className="feedback-section">
            <div className="feedback-section-title">💡 Suggested Summary</div>
            <div className="suggested-summary">{suggestedSummary}</div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="btn-row" style={{ justifyContent: 'center', marginTop: 8 }}>
        <button className="btn btn-primary btn-lg" onClick={onTryAgain} id="try-again-btn">
          Try Another Scenario →
        </button>
      </div>
    </div>
  )
}
