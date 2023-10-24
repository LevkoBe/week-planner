import React from "react";
import Button from "./Button";

const Task = ({ title, description, startTime, endTime }) => {
  let BtnEvent = (event) => {
    console.log("Button is pressed!");
  };

  return (
    <>
      <p>{title}</p>
      <p>
        {"description: "}, {description}
      </p>
      <p>
        {"Time of start: "}, {startTime}
      </p>
      <p>
        {"Time of end: "}, {endTime}
      </p>
      <Button title="Button_1" onBtnClick={BtnEvent} />
    </>
  );
};

export default Task;
