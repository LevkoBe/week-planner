import React from "react";
import Task from "./Task";

let Day = ({ name, tasks }) => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">Day: {name}</h5>
        <ul className="list-group">
          {tasks.map((task) => (
            <Task key={task.title} title={task.title} description={task.description} startTime={task.startTime} endTime={task.endTime}></Task>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Day;
