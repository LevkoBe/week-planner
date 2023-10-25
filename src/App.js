import React, { useState } from "react";
import "./App.css";
import "./styles/backgroundAnimation.css";
import Month from "./components/calendar/Month";
import initialTasks from "./components/tasks.js";
import DayExpanded from "./components/DayExpanded";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeDay, setActiveDay] = useState(new Date().toDateString());
  let handleDayClick = (day) => {
    setActiveDay(day.day);
  };
  let handleTasksChange = (newTask) => {
    console.log(tasks);
    tasks.push(newTask);
    setTasks(tasks);
    console.log(tasks);
  };
  return (
    <>
      <div className="background"></div>
      <div className="App">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Month tasks={tasks} onDayClick={handleDayClick} activeDay={activeDay} />
          <div style={{ flex: "60%", display: "flex", flexDirection: "column" }}>
            <DayExpanded activeDay={activeDay} onAddTask={handleTasksChange} tasks={tasks.filter((task) => task.date === activeDay)} />
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
