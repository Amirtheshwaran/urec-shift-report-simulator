export default function ScenarioCard({ scenario, onContinue }) {
  return (
    <div className="card" id="scenario-card">
      <div className="card-header">
        <div className="card-icon">📋</div>
        <div>
          <div className="card-title">Your Scenario</div>
          <div className="card-subtitle">Read the situation carefully before filling out your report</div>
        </div>
      </div>

      <div className="scenario-meta">
        <span className="badge badge-teal">{scenario.facilityShort}</span>
        <span className="badge badge-warning">{scenario.shiftType}</span>
      </div>

      <div style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 8, fontWeight: 600 }}>
        {scenario.facility}
      </div>

      <div className="scenario-context">{scenario.context}</div>

      <div className="scenario-tip">
        <span>💡</span>
        <span>
          Pay close attention to times, locations, and specific details. You'll need these for your shift report.
        </span>
      </div>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={onContinue} id="view-clues-btn">
          View Desk Clues →
        </button>
      </div>
    </div>
  )
}
