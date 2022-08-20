import logo from './logo.svg';
import './App.css';
import Game from "./Components/Game/Game";
import Menu from "./Components/Menu/Menu";
import React from "react";
function App() {
    const [isPlaying, setIsPlaying]=React.useState(false)
    const [mScore, setMScore]=React.useState(0)
  return (
    <div className="App">

        {isPlaying? <Game play={()=>setIsPlaying(!isPlaying)} scor={(score)=>setMScore(score)}/> :  <Menu mScore={mScore}  onSus={()=>setIsPlaying(!isPlaying)}/>}
    </div>
  );
}

export default App;
