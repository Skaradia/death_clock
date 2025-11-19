import React, { useState, useEffect } from 'react'
import './BirthdayModal.css'

function BirthdayModal({ isOpen, onSave, onClose, initialDate, initialAgeOfDeath }) {
  const [birthday, setBirthday] = useState(
    initialDate ? initialDate.toISOString().split('T')[0] : ''
  )
  const [ageOfDeath, setAgeOfDeath] = useState(
    initialAgeOfDeath ? initialAgeOfDeath.toString() : '80'
  )

  useEffect(() => {
    if (initialDate) {
      setBirthday(initialDate.toISOString().split('T')[0])
    }
    if (initialAgeOfDeath) {
      setAgeOfDeath(initialAgeOfDeath.toString())
    }
  }, [initialDate, initialAgeOfDeath])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (birthday && ageOfDeath) {
      const date = new Date(birthday)
      const age = parseInt(ageOfDeath, 10)
      if (!isNaN(date.getTime()) && !isNaN(age) && age > 0) {
        onSave(date, age)
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Set Your Birthday</h2>
          {onClose && (
            <button className="modal-close" onClick={onClose}>×</button>
          )}
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="birthday">Birthday:</label>
            <input
              id="birthday"
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              required
              className="form-input"
              max={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ageOfDeath">Age of Death:</label>
            <input
              id="ageOfDeath"
              type="number"
              value={ageOfDeath}
              onChange={(e) => setAgeOfDeath(e.target.value)}
              required
              min="1"
              step="1"
              className="form-input"
              placeholder="80"
            />
          </div>
          <div className="modal-actions">
            <button type="submit" className="btn-primary">
              Save
            </button>
            {onClose && (
              <button type="button" onClick={onClose} className="btn-secondary">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default BirthdayModal

