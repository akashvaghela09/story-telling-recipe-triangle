import React, { useState } from 'react';
import './App.css';
import TriangleImage from "./assets/triangle.svg.png";
function App() {

  const [primaryState, setPrimaryState] = useState("Story");
  const [secondaryState1, setSecondaryState1] = useState("Emotion");
  const [secondaryState2, setSecondaryState2] = useState("Rhythm");

  const handleStateChange = (clickedState) => {
    if (clickedState === secondaryState1) {
      setSecondaryState1(primaryState);
      setPrimaryState(clickedState);
    } else if (clickedState === secondaryState2) {
      setSecondaryState2(primaryState);
      setPrimaryState(clickedState);
    } else {
      console.log("No state change");
    }
  }

  return (
    <div className="App">
      <div className='triangle_container'>
        <img src={TriangleImage} className='triangle' alt='triangle' />
        <div className='button_container_top'>
          <p onClick={() => handleStateChange(primaryState)} className='state_button'>{primaryState}</p>
        </div>
        <div className='button_container_bottom'>
          <p onClick={() => handleStateChange(secondaryState1)} className='state_button button_1'>{secondaryState1}</p>
          <p onClick={() => handleStateChange(secondaryState2)} className='state_button button_1'>{secondaryState2}</p>
        </div>
      </div>
    </div>

  );
}

export default App;
