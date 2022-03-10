import React, { useReducer } from 'react';
import './Stopwatch.css';
const Stopwatch = () => {
  const initialState = { count: 0, intervalID: -1, IsRunning: false };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'start':
        return {
          count: state.count++,
          intervalID: state.intervalID,
          IsRunning: true,
        };
      case 'stop':
        return {
          count: state.count,
          intervalID: state.intervalID,
          IsRunning: false,
        };
      case 'rest':
        return {
          count: 0,
          intervalID: state.intervalID,
          IsRunning: false,
        };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const OnStartHandel = () => {
    if (state.IsRunning) {
      return;
    }
    state.intervalID = setInterval(() => dispatch({ type: 'start' }), 1000);
  };
  const OnStopHandel = () => {
    dispatch({ type: 'stop' });
    clearInterval(state.intervalID);
  };
  const OnResttHandel = () => {
    dispatch({ type: 'rest' });
  };
  return (
    <div className='timer_container'>
      <div className='timer'>{state.count}</div>
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
