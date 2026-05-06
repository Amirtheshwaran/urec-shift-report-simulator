import { useState } from 'react'

/**
 * ShiftReportForm — matches exact Connect2 format per facility + shift type.
 * 6 variants: Belk Opening/Midday, Belk Closing, Hayes Opening/Midday, Hayes Closing,
 *             NRFC Opening/Midday, NRFC Closing.
 * Mid-Shift scenarios use the Opening/Midday form.
 */

function getFormTitle(facility, shiftType) {
  const isClosing = shiftType === 'Closing'
  if (facility.includes('Belk')) return isClosing ? 'Belk Gym Closing Shift Report' : 'Belk Gym Opening/Midday Shift Report'
  if (facility.includes('Hayes')) return isClosing ? 'Hayes Field Closing Shift Report' : 'Hayes Field Opening/Midday Shift Report'
  return isClosing ? 'NRFC Closing Shift Report' : 'NRFC Opening/Midday Shift Report'
}

function isOpeningMidday(shiftType) {
  return shiftType !== 'Closing'
}

export default function ShiftReportForm({ scenario, traineeName, onSubmit }) {
  const fac = scenario.facilityShort // 'Belk', 'Hayes', 'NRFC'
  const isClosing = scenario.shiftType === 'Closing'
  const isOpening = isOpeningMidday(scenario.shiftType)
  const title = getFormTitle(scenario.facility, scenario.shiftType)

  const [form, setForm] = useState({
    date: new Date().toISOString().split('T')[0],
    clockIn: '',
    clockOut: '',
    staffLate: '',
    performanceForm: '',
    aedChecked: '',
    // Belk + NRFC
    laundryLoads: '',
    // Hayes
    coolersFilled: '',
    fieldsUnlocked: false,
    parkingIssues: '',
    // Common
    hourlyCountsDone: false,
    lostFoundCount: '',
    lostFoundForm: '',
    maintenanceIssues: '',
    keysReturned: '',
    accidents: '',
    firstAidUsed: '',
    summary: '',
    additionalComments: '',
    // Closing specific
    damagedEquipment: '',
    damagedEquipmentName: '',
    doorsLocked: false,
    // Hayes/NRFC closing
    lightsOffTime: '',
    bathroomsLockedTime: '',
    doorsGatesLocked: false,
    shedsLocked: false,
    // NRFC closing
    goalsLockedTime: '',
    carsInLot: '',
  })
  const [errors, setErrors] = useState({})

  function set(field) {
    return e => {
      const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
      setForm(f => ({ ...f, [field]: val }))
    }
  }

  function validate() {
    const errs = {}
    if (!form.summary.trim()) errs.summary = 'Summary of shift is required.'
    if (!form.clockIn) errs.clockIn = 'Required.'
    if (!form.clockOut) errs.clockOut = 'Required.'
    if (!form.staffLate) errs.staffLate = 'Required.'
    if (!form.aedChecked) errs.aedChecked = 'Required.'
    if (!form.accidents) errs.accidents = 'Required.'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      onSubmit({ ...form, traineeName, facility: scenario.facility, shiftType: scenario.shiftType })
    }
  }

  const hasErrors = Object.keys(errors).length > 0

  return (
    <form className="card" id="shift-report-form" onSubmit={handleSubmit}>
      <div className="card-header">
        <div className="card-icon">📝</div>
        <div>
          <div className="card-title">{title}</div>
          <div className="card-subtitle">Powered by Connect2Concepts</div>
        </div>
      </div>

      {isOpening && (
        <div style={{
          background: 'rgba(14,165,197,0.1)', border: '1px solid rgba(14,165,197,0.3)',
          borderRadius: 'var(--radius)', padding: '10px 16px', fontSize: 12,
          color: 'var(--teal)', marginBottom: 20, fontWeight: 500
        }}>
          ℹ️ Fill out if someone is coming in to work after you
        </div>
      )}

      {hasErrors && (
        <div className="validation-banner">
          <span>⚠️</span><span>Please fix the errors below before submitting.</span>
        </div>
      )}

      {/* ── Basic Info ── */}
      <div className="form-section">
        <div className="form-section-title">Basic Information</div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Date<span className="required">*</span></label>
            <input className="form-input" type="date" value={form.date} onChange={set('date')} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Clock In Time<span className="required">*</span></label>
            <input className="form-input" type="time" value={form.clockIn} onChange={set('clockIn')} />
            {errors.clockIn && <span className="form-error">{errors.clockIn}</span>}
          </div>
          <div className="form-group">
            <label className="form-label">Clock Out Time<span className="required">*</span></label>
            <input className="form-input" type="time" value={form.clockOut} onChange={set('clockOut')} />
            {errors.clockOut && <span className="form-error">{errors.clockOut}</span>}
          </div>
        </div>
      </div>

      {/* ── Staff & AED ── */}
      <div className="form-section">
        <div className="form-section-title">Staff & Safety Checks</div>

        <RadioField label="Were you or any of your staff late?" required value={form.staffLate} onChange={set('staffLate')} error={errors.staffLate} />

        {form.staffLate === 'Yes' && (
          <RadioField label="If yes, did you fill out the employee performance form?" value={form.performanceForm} onChange={set('performanceForm')} />
        )}

        <RadioField label="Did you check the AED?" required value={form.aedChecked} onChange={set('aedChecked')} error={errors.aedChecked} />
      </div>

      {/* ── Facility-Specific Fields ── */}
      <div className="form-section">
        <div className="form-section-title">Facility Operations</div>

        {/* Belk + NRFC: laundry */}
        {(fac === 'Belk' || fac === 'NRFC') && (
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">How many loads of laundry were done?<span className="required">*</span></label>
              <input className="form-input" type="number" min="0" value={form.laundryLoads} onChange={set('laundryLoads')} placeholder="0" />
            </div>
          </div>
        )}

        {/* Hayes: coolers */}
        {fac === 'Hayes' && (
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">{isClosing ? 'How many times were the coolers filled?' : 'How many coolers were filled?'}<span className="required">*</span></label>
              <input className="form-input" type="number" min="0" value={form.coolersFilled} onChange={set('coolersFilled')} placeholder="0" />
            </div>
          </div>
        )}

        {/* Hayes opening: fields unlocked */}
        {fac === 'Hayes' && isOpening && (
          <CheckboxField label="Fields unlocked?" required checked={form.fieldsUnlocked} onChange={set('fieldsUnlocked')} />
        )}

        {/* Hourly counts — all forms */}
        <CheckboxField label="Hourly counts done?" required checked={form.hourlyCountsDone} onChange={set('hourlyCountsDone')} />

        {/* Hayes: parking issues */}
        {fac === 'Hayes' && (
          <RadioField label="Any parking issues?" value={form.parkingIssues} onChange={set('parkingIssues')} yesLabel="Yes, pictures emailed" />
        )}
      </div>

      {/* ── Lost & Found ── */}
      <div className="form-section">
        <div className="form-section-title">Lost & Found</div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">How many lost/found items were found/turned in?<span className="required">*</span></label>
            <input className="form-input" type="number" min="0" value={form.lostFoundCount} onChange={set('lostFoundCount')} placeholder="0" />
          </div>
        </div>

        <RadioField label="If there were items, did you fill out the lost/found form?" value={form.lostFoundForm} onChange={set('lostFoundForm')} />
      </div>

      {/* ── Closing-Only Fields ── */}
      {isClosing && (
        <div className="form-section">
          <div className="form-section-title">Closing Procedures</div>

          {/* Belk + NRFC closing: damaged equipment */}
          {(fac === 'Belk' || fac === 'NRFC') && (
            <>
              <RadioField label="Any damaged/unreturned equipment?" required value={form.damagedEquipment} onChange={set('damagedEquipment')} />
              {form.damagedEquipment === 'Yes' && (
                <div className="form-row single">
                  <div className="form-group">
                    <label className="form-label">If yes, please provide the name of the last individual to check out the missing equipment.</label>
                    <input className="form-input" type="text" value={form.damagedEquipmentName} onChange={set('damagedEquipmentName')} />
                  </div>
                </div>
              )}
            </>
          )}

          {/* NRFC closing: lock goals time */}
          {fac === 'NRFC' && (
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">What time did you lock up the goals?<span className="required">*</span></label>
                <input className="form-input" type="time" value={form.goalsLockedTime} onChange={set('goalsLockedTime')} />
              </div>
            </div>
          )}

          {/* Hayes + NRFC closing: bathrooms + lights time */}
          {(fac === 'Hayes' || fac === 'NRFC') && (
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">What time did you lock the bathrooms?<span className="required">*</span></label>
                <input className="form-input" type="time" value={form.bathroomsLockedTime} onChange={set('bathroomsLockedTime')} />
              </div>
              <div className="form-group">
                <label className="form-label">What time did you turn the lights off?<span className="required">*</span></label>
                <input className="form-input" type="time" value={form.lightsOffTime} onChange={set('lightsOffTime')} />
              </div>
            </div>
          )}

          {/* Doors locked checkbox — all closing */}
          <CheckboxField
            label={fac === 'Belk' ? 'Did you verify all doors were locked?' : 'Did you verify all facility doors/gates were locked?'}
            required checked={form.doorsGatesLocked} onChange={set('doorsGatesLocked')}
          />

          {/* Hayes closing: sheds locked */}
          {fac === 'Hayes' && (
            <CheckboxField label="Did you check/lock the sheds?" required checked={form.shedsLocked} onChange={set('shedsLocked')} />
          )}

          {/* NRFC closing: cars in lot */}
          {fac === 'NRFC' && (
            <RadioField label="Were there any cars left in the parking lot you had to look in?" value={form.carsInLot} onChange={set('carsInLot')} yesLabel="Yes, emailed license plate photos" />
          )}
        </div>
      )}

      {/* ── Maintenance, Keys, Incidents ── */}
      <div className="form-section">
        <div className="form-section-title">Maintenance & Incidents</div>

        <div className="form-row single">
          <div className="form-group">
            <label className="form-label">Any maintenance issues or facility needs that we should be aware of?<span className="required">*</span></label>
            <textarea className="form-textarea" rows={3} value={form.maintenanceIssues} onChange={set('maintenanceIssues')} placeholder="Describe any issues..." />
          </div>
        </div>

        {fac === 'NRFC' && isClosing ? (
          <CheckboxField label="Were the keys returned? (keys should be returned and rechecked out after each shift)" required checked={form.keysReturned === 'checked'} onChange={e => setForm(f => ({ ...f, keysReturned: e.target.checked ? 'checked' : '' }))} />
        ) : (
          <RadioField label="Were the keys returned? (keys should be returned and rechecked out after each shift)" required value={form.keysReturned} onChange={set('keysReturned')} />
        )}

        <RadioField label="Any accidents/incidents?" required value={form.accidents} onChange={set('accidents')} yesLabel="Yes, form filled out" error={errors.accidents} />

        <div className="form-row single">
          <div className="form-group">
            <label className="form-label">What first aid equipment was used? (band aids, ice, tape, etc.)</label>
            <input className="form-input" type="text" value={form.firstAidUsed} onChange={set('firstAidUsed')} placeholder="None" />
          </div>
        </div>
      </div>

      {/* ── Summary ── */}
      <div className="form-section">
        <div className="form-section-title">Summary</div>

        <div className="form-row single">
          <div className="form-group">
            <label className="form-label">Summary of shift<span className="required">*</span></label>
            <textarea
              className="form-textarea" rows={5} value={form.summary} onChange={set('summary')}
              placeholder="Describe what happened during your shift..."
              id="shift-summary-textarea"
            />
            <span className="form-hint">
              {form.summary.trim().split(/\s+/).filter(Boolean).length} words
            </span>
            {errors.summary && <span className="form-error">{errors.summary}</span>}
          </div>
        </div>

        <div className="form-row single">
          <div className="form-group">
            <label className="form-label">Additional comments/concerns? (technology updates, patron comments, equipment needs, etc.)</label>
            <textarea className="form-textarea" rows={3} value={form.additionalComments} onChange={set('additionalComments')} placeholder="" />
          </div>
        </div>
      </div>

      <div className="btn-row" style={{ justifyContent: 'center' }}>
        <button className="btn btn-ghost" type="button" style={{ minWidth: 140 }}>SUBMIT LATER</button>
        <button className="btn btn-primary" type="submit" id="submit-report-btn" style={{ minWidth: 140 }}>SUBMIT</button>
      </div>
    </form>
  )
}

/* ── Reusable field components ── */

function RadioField({ label, required, value, onChange, yesLabel = 'Yes', error }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div className="form-label" style={{ marginBottom: 8 }}>
        {label}{required && <span className="required">*</span>}
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        <label className="radio-option" style={{ flex: 1, justifyContent: 'flex-start' }}>
          <input type="radio" name={label} value="Yes" checked={value === 'Yes'} onChange={onChange} />
          {yesLabel}
        </label>
        <label className="radio-option" style={{ flex: 1, justifyContent: 'flex-start' }}>
          <input type="radio" name={label} value="No" checked={value === 'No'} onChange={onChange} />
          No
        </label>
      </div>
      {error && <span className="form-error">{error}</span>}
    </div>
  )
}

function CheckboxField({ label, required, checked, onChange }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label className="radio-option" style={{ cursor: 'pointer' }}>
        <input type="checkbox" checked={checked} onChange={onChange} style={{ accentColor: 'var(--teal)', width: 16, height: 16 }} />
        <span>{label}{required && <span className="required">*</span>}</span>
      </label>
    </div>
  )
}
