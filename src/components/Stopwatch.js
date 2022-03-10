import React, { useState } from 'react';
import './Stopwatch.css';
const Stopwatch = () => {
  let initialState = 0;
  const [intervalID, setIntervalID] = useState(-1);
  const [watchState, setWatchState] = useState(initialState);
  const [IsRunning, setIsRunning] = useState(false);
  const OnStartHandel = () => {
    console.log(IsRunning);
    if (IsRunning) {
      return;
    }
    setIsRunning(true);
    setIntervalID(
      setInterval(() => setWatchState((watchState) => watchState + 1), 1000)
    );
  };
  const OnStopHandel = () => {
    clearInterval(intervalID);
    setIntervalID(-1);
    setIsRunning(false);
  };
  const OnResttHandel = () => {
    setWatchState(0);
  };
  return (
    <div className='timer_container'>
      <div className='timer'>{watchState}</div>
      <div className='buttons_wrapper'>
        <button className='btn' onClick={OnStartHandel}>
          Start
        </button>
        <button className='btn' onClick={OnStopHandel}>
          Stop
        </button>
        <button className='btn' onClick={OnResttHandel}>
          Rest
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
