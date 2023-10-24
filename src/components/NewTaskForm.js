import React, { useState } from "react";

const NewTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleAddTask = () => {
    const newTask = {
      title: title,
      description: description,
      startTime: startTime,
      endTime: endTime,
    };

    onAddTask(newTask);

    setTitle("");
    setDescription("");
    setStartTime("");
    setEndTime("");
    console.log("New Task:", newTask);
  };

  return (
    <div>
      <h6>Add New Task</h6>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Start Time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      <input type="text" placeholder="End Time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      <button className="btn btn-success" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default NewTaskForm;
