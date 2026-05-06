import { useState } from 'react'

export default function ShiftReportForm({ scenario, traineeName, onSubmit }) {
  const [form, setForm] = useState({
    date: new Date().toISOString().split('T')[0],
    facility: scenario.facility,
    shiftType: scenario.shiftType,
    staffOnDuty: traineeName,
    shiftSummary: '',
    maintenanceIssues: '',
    equipmentStatus: '',
    patronInteractions: '',
    incidentsOrEmergencies: '',
    followUpItems: '',
    additionalNotes: '',
  })
  const [errors, setErrors] = useState({})

  function set(field) {
    return e => setForm(f => ({ ...f, [field]: e.target.value }))
  }

  function validate() {
    const errs = {}
    if (!form.shiftSummary.trim()) errs.shiftSummary = 'Shift summary is required.'
    if (form.shiftSummary.trim().split(/\s+/).length < 10)
      errs.shiftSummary = 'Please write at least 10 words in your summary.'
    if (!form.staffOnDuty.trim()) errs.staffOnDuty = 'Staff name is required.'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      onSubmit(form)
    }
  }

  const hasErrors = Object.keys(errors).length > 0

  return (
    <form className="card" id="shift-report-form" onSubmit={handleSubmit}>
      <div className="card-header">
        <div className="card-icon">📝</div>
        <div>
          <div className="card-title">Shift Report Form</div>
          <div className="card-subtitle">Fill this out as if you just finished your shift</div>
        </div>
      </div>

      {/* Header bar */}
      <div className="form-header">
        <div>
          <div className="form-header-title">{scenario.facility}</div>
          <div className="form-header-meta">{scenario.shiftType} Shift Report</div>
        </div>
        <div className="scenario-meta">
          <span className="badge badge-teal">{scenario.facilityShort}</span>
          <span className="badge badge-warning">{scenario.shiftType}</span>
        </div>
      </div>

      {hasErrors && (
        <div className="validation-banner">
          <span>⚠️</span>
          <span>Please fix the errors below before submitting.</span>
        </div>
      )}

      {/* Basic Info */}
      <div className="form-section">
        <div className="form-section-title">Basic Information</div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              Date<span className="required">*</span>
            </label>
            <input className="form-input" type="date" value={form.date} onChange={set('date')} />
          </div>
          <div className="form-group">
            <label className="form-label">
              Staff on Duty<span className="required">*</span>
            </label>
            <input
              className="form-input"
              type="text"
              value={form.staffOnDuty}
              onChange={set('staffOnDuty')}
              placeholder="Your name"
            />
            {errors.staffOnDuty && <span className="form-error">{errors.staffOnDuty}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Facility</label>
            <input className="form-input" type="text" value={form.facility} readOnly />
          </div>
          <div className="form-group">
            <label className="form-label">Shift Type</label>
            <input className="form-input" type="text" value={form.shiftType} readOnly />
          </div>
        </div>
      </div>

      {/* Shift Summary */}
      <div className="form-section">
        <div className="form-section-title">Shift Summary</div>
        <div className="form-row single">
          <div className="form-group">
            <label className="form-label">
              Summary of Events<span className="required">*</span>
            </label>
            <textarea
              className="form-textarea"
              rows={6}
              value={form.shiftSummary}
              onChange={set('shiftSummary')}
              placeholder="Describe what happened during your shift. Include specific times, locations, what you observed, actions taken, and any follow-up needed..."
              id="shift-summary-textarea"
            />
            <span className="form-hint">
              {form.shiftSummary.trim().split(/\s+/).filter(Boolean).length} words — aim for 80+ for a thorough report
            </span>
            {errors.shiftSummary && <span className="form-error">{errors.shiftSummary}</span>}
          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="form-section">
        <div className="form-section-title">Detailed Observations</div>

        <div className="form-row single">
          <div className="form-group">
            <label className="form-label">Maintenance Issues</label>
            <textarea
              className="form-textarea"
              rows={3}
              value={form.maintenanceIssues}
              onChange={set('maintenanceIssues')}
              placeholder="Any maintenance or facility issues observed..."
            />
          </div>
        </div>

        <div className="form-row single">
          <div className="form-group">
            <label className="form-label">Equipment Status</label>
            <textarea
              className="form-textarea"
              rows={3}
              value={form.equipmentStatus}
              onChange={set('equipmentStatus')}
              placeholder="Status of equipment, anything out of order or needing attention..."
            />
          </div>
        </div>

        <div className="form-row single">
          <div className="form-group">
            <label className="form-label">Patron Interactions</label>
            <textarea
              className="form-textarea"
              rows={3}
              value={form.patronInteractions}
              onChange={set('patronInteractions')}
              placeholder="Any notable interactions with patrons, complaints, or questions..."
            />
          </div>
        </div>

        <div className="form-row single">
          <div className="form-group">
            <label className="form-label">Incidents or Emergencies</label>
            <textarea
              className="form-textarea"
              rows={3}
              value={form.incidentsOrEmergencies}
              onChange={set('incidentsOrEmergencies')}
              placeholder="Any incidents, injuries, emergencies, or safety concerns..."
            />
          </div>
        </div>
      </div>

      {/* Follow-up */}
      <div className="form-section">
        <div className="form-section-title">Follow-Up & Notes</div>
        <div className="form-row single">
          <div className="form-group">
            <label className="form-label">Follow-Up Items for Next Shift</label>
            <textarea
              className="form-textarea"
              rows={3}
              value={form.followUpItems}
              onChange={set('followUpItems')}
              placeholder="What does the next shift need to know or act on?"
            />
          </div>
        </div>
        <div className="form-row single">
          <div className="form-group">
            <label className="form-label">Additional Notes</label>
            <textarea
              className="form-textarea"
              rows={2}
              value={form.additionalNotes}
              onChange={set('additionalNotes')}
              placeholder="Anything else worth documenting..."
            />
          </div>
        </div>
      </div>

      <div className="btn-row">
        <button className="btn btn-primary btn-lg" type="submit" id="submit-report-btn">
          Submit for Review →
        </button>
      </div>
    </form>
  )
}
