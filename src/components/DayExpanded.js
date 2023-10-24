import React from "react";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task";

const DayExpanded = ({ name, tasks, setTasksData }) => {
  const expandedDayStyles = {
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

  return (
    <div className="card my-3" style={expandedDayStyles}>
      <div className="card-body">
        <h5 className="card-title">Day: {name}</h5>
        <NewTaskForm setTasksData={setTasksData} currentDay={name} />
        <ul className="list-group">
          {tasks.map((task) => (
            <Task key={task.title} title={task.title} description={task.description} startTime={task.startTime} endTime={task.endTime} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DayExpanded;
