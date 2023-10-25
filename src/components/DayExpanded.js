import React from "react";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task";
import "./DayExpanded.css";

const DayExpanded = ({ activeDay, onAddTask, onDelTask, tasks }) => {
  let handleAddTask = (task) => {
    onAddTask(task);
  };
  let handleDelTask = (task) => {
    onDelTask(task);
  };

  return (
    <div className="day-expanded">
      <h5 className="day-expanded-title">Day: {activeDay}</h5>
      <NewTaskForm currentDay={activeDay} addATask={handleAddTask} />
      <ul className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task key={index} title={task.title} description={task.description} startTime={task.startTime} endTime={task.endTime} task={task} onDelTask={handleDelTask} />
          ))
        ) : (
          <p className="no-tasks-text">No tasks planned</p>
        )}
      </ul>
    </div>
  );
};

export default DayExpanded;
