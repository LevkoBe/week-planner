import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task";

let DayExpanded = ({ name, tasks }) => {
  const [dayTasks, setDayTasks] = useState(tasks);

  const handleAddTask = (newTask) => {
    setDayTasks([...dayTasks, newTask]);
  };
  let expandedDayStyles = {
    width: "95vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    margin: "0 auto",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: 100,
  };
  let [showForm, setShowForm] = useState(true);

  let toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="card my-3" style={expandedDayStyles}>
      <div className="card-body">
        <h5 className="card-title">Day: {name}</h5>
        <button className="btn btn-primary" onClick={toggleForm}>
          Add Task
        </button>
        {showForm && <NewTaskForm onAddTask={handleAddTask} />}
        <ul className="list-group">
          {tasks.map((task) => (
            <Task key={task.title} title={task.title} description={task.description} startTime={task.startTime} endTime={task.endTime}></Task>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DayExpanded;
