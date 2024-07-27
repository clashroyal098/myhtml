import './App.css';
import React from "react";
function App() {
  const [y , qq] = React.useState(0);
  function Add() {
    qq ((x) => x + 3);
  } 
  function Subtract() {
    qq ((x) => x - 2);
  }
  return (
    <div className="App">
      <div className="main">
        <button className="subtract" onClick = {Subtract}>SUBTRACT</button>
        <div className="circle">{y}</div>
        <button className="add" onClick = {Add}>ADD</button>
      </div>
    </div>
  );
}
export default App;
