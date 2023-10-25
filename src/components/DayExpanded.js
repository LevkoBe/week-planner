import React from "react";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task";

const DayExpanded = ({ activeDay, onAddTask, tasks }) => {
  let handleAddTask = (task) => {
    onAddTask(task);
  };
  return (
    <div className="day-expanded">
      <h5 className="day-expanded-title">Day: {activeDay}</h5>
      <NewTaskForm currentDay={activeDay} addATask={handleAddTask} />
      <ul className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} title={task.title} description={task.description} startTime={task.startTime} endTime={task.endTime} />
        ))}
      </ul>
    </div>
  );
};

export default DayExpanded;
