export default function DeskClueCard({ scenario, onContinue }) {
  return (
    <div className="card" id="desk-clue-card">
      <div className="card-header">
        <div className="card-icon">🔍</div>
        <div>
          <div className="card-title">Desk & Equipment Clues</div>
          <div className="card-subtitle">These are the things you noticed during your shift</div>
        </div>
      </div>

      <div className="clue-image-wrap">
        <div className="clue-placeholder">
          <div className="clue-placeholder-icon">🏢</div>
          <span>{scenario.facility} — {scenario.shiftType} Shift</span>
          <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>
            Visual clue area • Review the items below
          </span>
        </div>
      </div>

      <div className="clue-bullets">
        {scenario.clues.map((clue, i) => (
          <div className="clue-bullet" key={i}>
            <div className="clue-dot" />
            <span>{clue}</span>
          </div>
        ))}
      </div>

      <div className="scenario-tip" style={{ marginTop: 16 }}>
        <span>📝</span>
        <span>
          Use these observations when filling out your shift report. Include specific details, times, and any actions you would take.
        </span>
      </div>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={onContinue} id="write-report-btn">
          Write Shift Report →
        </button>
      </div>
    </div>
  )
}
