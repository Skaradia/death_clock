import React from 'react'
import './Controls.css'

function Controls({ timeUnit, setTimeUnit }) {
  const timeUnits = ['weeks', 'months', 'years', 'decades']

  return (
    <div className="controls-container">
      <div className="control-group">
        <label htmlFor="time-unit">Time Unit:</label>
        <select
          id="time-unit"
          value={timeUnit}
          onChange={(e) => setTimeUnit(e.target.value)}
          className="control-select"
        >
          {timeUnits.map(unit => (
            <option key={unit} value={unit}>
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Controls

