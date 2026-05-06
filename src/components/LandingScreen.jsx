import { useState } from 'react'

export default function LandingScreen({ onStart }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const valid = firstName.trim().length >= 2 && lastName.trim().length >= 2

  return (
    <div className="landing" id="landing-screen">
      <div className="landing-logo">
        <span className="landing-badge">UREC</span>
      </div>
      <h1 className="landing-title">
        Shift Report <span>Simulator</span>
      </h1>
      <p className="landing-subtitle">
        Practice writing professional shift reports. You'll be given a randomized facility scenario, observe the clues, fill out a report, and receive AI-powered feedback on your performance.
      </p>
      <div className="landing-card">
        <h2>Who's training today?</h2>
        <div className="form-group" style={{ marginBottom: 14 }}>
          <label className="form-label">First Name<span className="required">*</span></label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            maxLength={40}
            id="first-name-input"
          />
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Last Name<span className="required">*</span></label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            maxLength={40}
            id="last-name-input"
          />
        </div>
        <button
          className="btn btn-primary btn-lg"
          style={{ width: '100%', marginTop: 20 }}
          disabled={!valid}
          onClick={() => onStart(`${firstName.trim()} ${lastName.trim()}`)}
          id="start-btn"
        >
          Start Training →
        </button>
        <div className="training-note">
          <strong>How it works:</strong> You'll see a facility scenario with clues, then fill out a shift report. An AI reviewer will score your report from 1-100 and provide specific, actionable feedback.
        </div>
      </div>
    </div>
  )
}
