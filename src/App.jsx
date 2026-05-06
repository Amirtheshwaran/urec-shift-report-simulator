import { useState, useCallback } from 'react'
import LandingScreen from './components/LandingScreen'
import ScenarioCard from './components/ScenarioCard'
import DeskClueCard from './components/DeskClueCard'
import ShiftReportForm from './components/ShiftReportForm'
import ResultsPanel from './components/ResultsPanel'
import { getRandomScenario } from './data/scenarios'
import { scoreLocally } from './utils/localScoring'

const STEP_LABELS = ['Start', 'Scenario', 'Clues', 'Report', 'Results']

export default function App() {
  const [step, setStep] = useState(0)
  const [traineeName, setTraineeName] = useState('')
  const [scenario, setScenario] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleStart = useCallback((name) => {
    setTraineeName(name)
    setScenario(getRandomScenario())
    setStep(1)
  }, [])

  const handleSubmit = useCallback(async (formData) => {
    setLoading(true)
    setStep(4)

    try {
      const res = await fetch('/.netlify/functions/evaluate-shift-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData, scenario }),
      })

      if (!res.ok) throw new Error('API error')
      const data = await res.json()
      setResult(data)
    } catch {
      // Fallback to local scoring
      const localResult = scoreLocally(formData, scenario)
      setResult(localResult)
    } finally {
      setLoading(false)
    }
  }, [scenario])

  const handleTryAgain = useCallback(() => {
    setScenario(getRandomScenario())
    setResult(null)
    setStep(1)
  }, [])

  // Landing screen is full-page (no shell)
  if (step === 0) {
    return <LandingScreen onStart={handleStart} />
  }

  return (
    <div className="app-shell">
      {/* Top Bar */}
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-logo">
            <span className="logo-badge">UREC</span>
            <span className="topbar-title">Shift Report Simulator</span>
          </div>
          <span className="topbar-trainee">👤 {traineeName}</span>
        </div>
      </header>

      {/* Step Progress */}
      <nav className="step-bar" aria-label="Progress">
        <div className="container step-bar-inner">
          {STEP_LABELS.map((label, i) => (
            <span key={i}>
              {i > 0 && <span className="step-connector" />}
              <span
                className={`step-item${i === step ? ' active' : ''}${i < step ? ' done' : ''}`}
              >
                <span className="step-num">{i < step ? '✓' : i + 1}</span>
                <span className="step-label-text">{label}</span>
              </span>
            </span>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {step === 1 && (
            <ScenarioCard scenario={scenario} onContinue={() => setStep(2)} />
          )}

          {step === 2 && (
            <DeskClueCard scenario={scenario} onContinue={() => setStep(3)} />
          )}

          {step === 3 && (
            <ShiftReportForm
              scenario={scenario}
              traineeName={traineeName}
              onSubmit={handleSubmit}
            />
          )}

          {step === 4 && loading && (
            <div className="card">
              <div className="loading-wrap">
                <div className="spinner" />
                <span>Analyzing your shift report...</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                  Our AI reviewer is evaluating your responses
                </span>
              </div>
            </div>
          )}

          {step === 4 && !loading && result && (
            <ResultsPanel result={result} onTryAgain={handleTryAgain} />
          )}
        </div>
      </main>
    </div>
  )
}
