import React, { useState } from "react";

const NewTaskForm = ({ currentDay, setTasksData }) => {
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

    setTasksData((prevTasksData) => ({
      ...prevTasksData,
      [currentDay]: [...prevTasksData[currentDay], newTask],
    }));

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
      <h6>Add New Task</h6>
      <input className="form-control mb-2" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} onClick={handleInputClick} />
      <input className="form-control mb-2" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} onClick={handleInputClick} />
      <input className="form-control mb-2" type="text" placeholder="Start Time" value={startTime} onChange={(e) => setStartTime(e.target.value)} onClick={handleInputClick} />
      <input className="form-control mb-2" type="text" placeholder="End Time" value={endTime} onChange={(e) => setEndTime(e.target.value)} onClick={handleInputClick} />
      <button className="btn btn-success" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default NewTaskForm;
