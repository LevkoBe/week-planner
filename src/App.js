import React from "react";
import logo from "./hi2.png";
import "./App.css";
import Month from "./components/Month";
import NewTaskForm from "./components/NewTaskForm";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Month />
        <div style={{ flex: "60%", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: "40%" }}>
            <NewTaskForm></NewTaskForm>
          </div>
          <div style={{ flex: "60%" }}>{/* Task */}</div>
        </div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
}

export default App;
