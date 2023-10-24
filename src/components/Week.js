import React from "react";
import tasks from "../stubs/tasks";
import Day from "./Day";

const Week = () => {
  let days = [
    { day: "Monday", tasks: [tasks[0], tasks[1]] },
    // Add data for the other days
  ];

  return (
    <>
      {days.map((day) => (
        <Day key={day.day} name={day.day} tasks={day.tasks}></Day>
      ))}
    </>
  );
};

export default Week;
