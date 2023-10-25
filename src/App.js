import React from "react";
import "./App.css";
import "./styles/backgroundAnimation.css";
import Month from "./components/Month";
import NewTaskForm from "./components/NewTaskForm";
import tasks from "./components/tasks.js";

function App() {
  return (
    <>
      <div className="background"></div>
      <div className="App">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Month tasks={tasks} />
          <div style={{ flex: "60%", display: "flex", flexDirection: "column" }}>
            <div style={{ flex: "40%" }}>
              <NewTaskForm></NewTaskForm>
            </div>
            <div style={{ flex: "60%" }}>{/* Task */}</div>
          </div>
        </div>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </div>
    </>
  );
}

export default App;
