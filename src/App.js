import './App.css';
import {useEffect, useState} from 'react';
import { FaArrowDown } from "react-icons/fa";

const App = () => {
  //change to const after
  var [countDays, setCountDays] = useState();
  var [countHours, setCountHours] = useState();
  var [countMinutes, setCountMinutes] = useState();
  var [countSeconds, setCountSeconds] = useState();

  let timeInterval;

  const startTimer = () => {
    const deadlineDate = new Date("May 25, 2023").getTime();
    const timeInterval = setInterval(() => {
      const nowDate = new Date().getTime();
      const timeDifference = deadlineDate - nowDate;

      // Calculate the time to use variables
      const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
      const hours = Math.floor(timeDifference % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
      const minutes = Math.floor(timeDifference % (60 * 60 * 1000) / (1000 * 60));
      const seconds = Math.floor(timeDifference % (60 * 1000) / 1000);

      if (timeDifference < 0) {
        clearInterval(timeInterval.current)
      }else{
        setCountDays(days);
        setCountHours(hours);
        setCountMinutes(minutes);
        setCountSeconds(seconds);
      }
    })
  }

  useEffect(()=>{
    startTimer();
  });

  return (
    <div className="main-container">
      <div className="clock">
        <div className="header-container">
          <h1 className="header-title">Middle-Earth Tattoo Workshop</h1>
        </div>
        <div className="clock-info">
          <div className="clock-subcont">
            <p className="clock-num">{countDays}:</p>
            <p className="clock-desc">Days</p>
          </div>
          <div className="clock-subcont">
            <p className="clock-num">{countHours}:</p>
            <p className="clock-desc">Hours</p>
          </div>
          <div className="clock-subcont">
            <p className="clock-num">{countMinutes}:</p>
            <p className="clock-desc">Minutes</p>
          </div>
          <div className="clock-subcont">
            <p className="clock-num">{countSeconds}</p>
            <p className="clock-desc">Seconds</p>
          </div>
        </div>
        <div className="subscribe-container">
        <FaArrowDown size={35} color="white"/>
          <div className="subcribe-description">
            <p className="subscribe-description-head">Get Notified</p>
            <p className="subscribe-description-text">Subscribe Now!</p>
          </div>
          <div className="subscribe-input-container">
            <input type="text" placeholder="Your email here..." className="subscribe-input"/>
            <input type="button" value="Go!" className="subscribe-button"/>
          </div>          
        </div>
      </div>      
    </div>
  )
}

export default App;