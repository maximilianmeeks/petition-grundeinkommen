import React, { useState, useEffect } from "react"
import "./countdown.css"

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("06/30/2020 10:00:00 GMT+0200").getTime()
  )
  const [loaded, setLoaded] = useState(false)
  const [state, setState] = useState({
    days: 4,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setInterval(() => setNewTime(), 1000)
  }, [])

  useEffect(() => {
    setInterval(() => setLoaded(true), 1000)
  }, [])

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime()

      const distanceToDate = countdownDate - currentTime

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      )
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9]

      days = `${days}`
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`
      }
      if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`
      }
      if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`
      }

      setState({ days: days, hours: hours, minutes, seconds })
    }
  }

  return (
    <div
      className={`${
        loaded ? "countdown-visible" : "countdown-invisible"
      } opacity-fade`}
    >
      <div className="countdown-wrapper row justify-content-center">
        <div className="time-section">
          <div className="time">{state.days || "0"}</div>
          <small className="time-text">Tage</small>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{state.hours || "00"}</div>
          <small className="time-text">Stunden</small>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{state.minutes || "00"}</div>
          <small className="time-text">Minuten</small>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{state.seconds || "00"}</div>
          <small className="time-text">Sekunden</small>
        </div>
      </div>
    </div>
  )
}

export default Countdown
