import React, { useState } from "react";

const NewTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleAddTask = () => {
    // Here, you can implement the logic to add a new task.
    // You can use the state variables (title, description, startTime, endTime) to create a new task object.
    // Add the new task to the tasks list and update the state.
    // You may also want to clear the form after adding the task.
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
