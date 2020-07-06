import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnDisplayComponent from './Components/BtnDisplayComponent';
import './App.css';

function App() {
  //states
  //start
  //pause
  //resume
  //reset
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [state, setState] = useState(0); //initialized to state = 0

  const start = () => {  
    run();
    setInterv(setInterval(run, 1000));
    setState(1);
  };
  const stop = () => {
    clearInterval(interv); 
    setState(2);
  }
  const reset = () => {
    clearInterval(interv);
    setTime({ms: 0, s:0, m:0, h:0});
    setState(0);
  }
  var updatedMs = time.ms, updatedS = time.s,updatedM = time.m,updatedh = time.h;
  
  const run = () => {
    if(updatedM === 60){
      updatedh++;
      updatedM = 0;
      updatedS = 0;
    }

    if(updatedS === 60){
        updatedM++;
        updatedS = 0; 
    }

    if(updatedMs === 100){
        updatedS++;
        updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s: updatedS, m:updatedM, h:updatedh});
  } 

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time}/>
          <BtnDisplayComponent start={start} stop = {stop}  reset = {reset} state={state} />

        </div>
      </div>
    </div>
  );
}

export default App;
 