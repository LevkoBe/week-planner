import React from "react";
import Button from "./Button";

let Task = ({ title, description, startTime, endTime, task, onDelTask }) => {
  let BtnEvent = () => {
    onDelTask(task);
    console.log("Button is pressed!");
  };

  return (
    <li className="list-group-item">
      <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
      <p className="card-text">
        <strong>Description: </strong>
        {description}
      </p>
      <p className="card-text">
        <strong>Start Time: </strong>
        {startTime}
      </p>
      <p className="card-text">
        <strong>End Time: </strong>
        {endTime}
      </p>
      <Button title="Done" onBtnClick={BtnEvent} />
    </li>
  );
};

export default Task;
