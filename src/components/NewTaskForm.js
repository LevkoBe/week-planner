import React, { useState } from "react";
import Task from "./TaskClass";

const NewTaskForm = ({ currentDay, addATask }) => {
  const [title, setTitle] = useState("HW # 13");
  const [description, setDescription] = useState("Do it today, should be OK");
  const [startTime, setStartTime] = useState("00:01");
  const [endTime, setEndTime] = useState("23:59");

  const startTimeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  const endTimeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

  const handleAddTask = () => {
    if (!startTime.match(startTimeRegex)) {
      alert("Invalid Start Time format. Please use HH:MM (24-hour) format.");
      return;
    }

    if (!endTime.match(endTimeRegex)) {
      alert("Invalid End Time format. Please use HH:MM (24-hour) format.");
      return;
    }

    const taskToAdd = new Task(title, description, currentDay, startTime, endTime);
    console.log(taskToAdd);
    addATask(taskToAdd);
    setTitle("");
    setDescription("");
    setStartTime("");
    setEndTime("");
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="bg-light p-3 rounded NewTaskForm bg-light p-3 rounded">
      <h6>Add New Task for {currentDay}</h6>
      <input className="form-control mb-2" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} onClick={handleInputClick} />
      <input className="form-control mb-2" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} onClick={handleInputClick} />
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Start Time (HH:MM)"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        onClick={handleInputClick}
      />
      <input className="form-control mb-2" type="text" placeholder="End Time (HH:MM)" value={endTime} onChange={(e) => setEndTime(e.target.value)} onClick={handleInputClick} />
      <button className="btn btn-success" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default NewTaskForm;
