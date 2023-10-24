import React from "react";
import tasks from "../stubs/tasks";
import Day from "./Day";
import "../styles/index.css";

const Week = () => {
  let days = [
    { day: "Monday", tasks: [tasks[0], tasks[1]] },
    { day: "Tuesday", tasks: [tasks[2], tasks[3]] },
    { day: "Wednesday", tasks: [tasks[4], tasks[5]] },
    { day: "Thursday", tasks: [tasks[1], tasks[4]] },
    { day: "Friday", tasks: [tasks[2], tasks[3]] },
    { day: "Saturday", tasks: [tasks[1], tasks[4], tasks[5]] },
    { day: "Sunday", tasks: [tasks[0], tasks[1], tasks[2], tasks[3], tasks[4], tasks[5]] },
  ];

  return (
    <div className="container">
      <h1 className="text-center my-4">Week Planner</h1>
      <div className="row">
        {days.map((day) => (
          <div key={day.day} className="col-md-4">
            <Day name={day.day} tasks={day.tasks}></Day>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Week;
