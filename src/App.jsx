import React, { useState } from 'react'
import Timer from './components/Timer'
import Calendar from './components/Calendar'
import BirthdayModal from './components/BirthdayModal'
import './App.css'

function App() {
  const [birthday, setBirthday] = useState(() => {
    const saved = localStorage.getItem('deathClockBirthday')
    return saved ? new Date(saved) : null
  })
  const [ageOfDeath, setAgeOfDeath] = useState(() => {
    const saved = localStorage.getItem('deathClockAgeOfDeath')
    return saved ? parseInt(saved, 10) : 80
  })
  const [showModal, setShowModal] = useState(!birthday)
  const [timeUnit, setTimeUnit] = useState('weeks')

  const handleBirthdaySave = (newBirthday, newAgeOfDeath) => {
    setBirthday(newBirthday)
    setAgeOfDeath(newAgeOfDeath)
    localStorage.setItem('deathClockBirthday', newBirthday.toISOString())
    localStorage.setItem('deathClockAgeOfDeath', newAgeOfDeath.toString())
    setShowModal(false)
  }

  if (!birthday) {
    return (
      <div className="app">
        <BirthdayModal
          isOpen={showModal}
          onSave={handleBirthdaySave}
          initialDate={birthday}
          initialAgeOfDeath={ageOfDeath}
        />
      </div>
    )
  }

  return (
    <div className="app">
      <div className="main-container">
        <div className="header">
          <h1>DEATH CLOCK</h1>
          <div className="header-controls">
            <select
              id="time-unit"
              value={timeUnit}
              onChange={(e) => setTimeUnit(e.target.value)}
              className="time-unit-select"
            >
              <option value="weeks">WEEKS</option>
              <option value="months">MONTHS</option>
              <option value="years">YEARS</option>
              <option value="decades">DECADES</option>
            </select>
            <button className="change-birthday-btn" onClick={() => setShowModal(true)}>
              Birth Date
            </button>
          </div>
        </div>
        
        <Timer birthday={birthday} ageOfDeath={ageOfDeath} />
        
        <Calendar
          birthday={birthday}
          timeUnit={timeUnit}
          ageOfDeath={ageOfDeath}
        />
      </div>
      
      <BirthdayModal
        isOpen={showModal}
        onSave={handleBirthdaySave}
        onClose={() => setShowModal(false)}
        initialDate={birthday}
        initialAgeOfDeath={ageOfDeath}
      />
    </div>
  )
}

export default App

