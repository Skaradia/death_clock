import React, { useState, useEffect } from 'react'
import './Timer.css'

function Timer({ birthday, ageOfDeath = 80 }) {
  const [timeRemaining, setTimeRemaining] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date()
      const deathDate = new Date(birthday)
      deathDate.setFullYear(birthday.getFullYear() + ageOfDeath)

      const diff = deathDate - now

      if (diff <= 0) {
        return {
          years: 0,
          months: 0,
          weeks: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      }

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44))
      const weeks = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7))
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      return { years, months, weeks, days, hours, minutes, seconds }
    }

    setTimeRemaining(calculateTimeRemaining())
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => clearInterval(interval)
  }, [birthday, ageOfDeath])

  return (
    <div className="timer-container">
      <div className="timer">
        <div className="timer-item">
          <div className="timer-value">{timeRemaining.years}</div>
          <div className="timer-label">Years</div>
        </div>
        <div className="timer-divider"></div>
        <div className="timer-item">
          <div className="timer-value">{timeRemaining.months}</div>
          <div className="timer-label">Months</div>
        </div>
        <div className="timer-divider"></div>
        <div className="timer-item">
          <div className="timer-value">{timeRemaining.weeks}</div>
          <div className="timer-label">Weeks</div>
        </div>
        <div className="timer-divider"></div>
        <div className="timer-item">
          <div className="timer-value">{timeRemaining.days}</div>
          <div className="timer-label">Days</div>
        </div>
        <div className="timer-divider"></div>
        <div className="timer-item">
          <div className="timer-value">{timeRemaining.hours}</div>
          <div className="timer-label">Hours</div>
        </div>
        <div className="timer-divider"></div>
        <div className="timer-item">
          <div className="timer-value">{timeRemaining.minutes}</div>
          <div className="timer-label">Minutes</div>
        </div>
        <div className="timer-divider"></div>
        <div className="timer-item">
          <div className="timer-value">{timeRemaining.seconds}</div>
          <div className="timer-label">Seconds</div>
        </div>
      </div>
    </div>
  )
}

export default Timer

