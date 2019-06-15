import React, { Component } from 'react'

class Time extends Component {
  render() {
    console.log(this.props)
    const list =  this.props.times ? (
      this.props.times.map((t ) =>{
          return (
              <div key={t.timings.Fajr} >
        <h4>Fajr : {t.timings.Fajr}</h4>
        <h4>Sunrise : {t.timings.Sunrise}</h4>
        <h4>Dhuhr : {t.timings.Dhuhr}</h4>
        <h4>Asr : {t.timings.Asr}</h4>
        <h4>Sunset : {t.timings.Sunset}</h4>
        <h4>Maghrib : {t.timings.Maghrib}</h4>
        <h4>Isha : {t.timings.Isha}</h4>
        <h4>Imsak : {t.timings.Imsak}</h4>
        <h4>Midnight : {t.timings.Midnight}</h4>
        <hr/>
      </div>
          
          )
      })
  )
   : (
      <h1>There has no post</h1>
    )
    return (
      <div className="time">
        <h1>PRAYER TIME</h1>
        <div className="displayTime">
          {list}
        </div>
      </div>
    )
  }
}

export default Time
