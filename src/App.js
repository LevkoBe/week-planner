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
  let handleTasksAdd = (newTask) => {
    console.log(tasks);
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    console.log(tasks);
  };
  let handleTasksDel = (task) => {
    console.log(tasks);
    const updatedTasks = tasks.filter((t) => t != task);
    setTasks(updatedTasks);
    console.log(tasks);
  };
  return (
    <>
      <div className="background"></div>
      <div className="App">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Month tasks={tasks} onDayClick={handleDayClick} activeDay={activeDay} />
          <div style={{ flex: "60%", display: "flex", flexDirection: "column" }}>
            <DayExpanded activeDay={activeDay} onAddTask={handleTasksAdd} onDelTask={handleTasksDel} tasks={tasks.filter((task) => task.date === activeDay)} />
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
