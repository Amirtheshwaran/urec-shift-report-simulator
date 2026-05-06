import { useState } from 'react'

const PRESET_NAMES = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Riley', 'Casey']

export default function LandingScreen({ onStart }) {
  const [name, setName] = useState('')
  const [selected, setSelected] = useState('')

  const activeName = name.trim() || selected

  function handleChip(n) {
    setSelected(n)
    setName('')
  }

  function handleInput(e) {
    setName(e.target.value)
    if (e.target.value.trim()) setSelected('')
  }

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
        <div className="name-grid">
          {PRESET_NAMES.map(n => (
            <button
              key={n}
              className={`name-chip${selected === n ? ' selected' : ''}`}
              onClick={() => handleChip(n)}
              type="button"
            >
              {n}
            </button>
          ))}
        </div>
        <div className="name-divider">or type your name</div>
        <input
          className="form-input"
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={handleInput}
          maxLength={40}
          id="trainee-name-input"
        />
        <button
          className="btn btn-primary btn-lg"
          style={{ width: '100%', marginTop: 20 }}
          disabled={!activeName}
          onClick={() => onStart(activeName)}
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
