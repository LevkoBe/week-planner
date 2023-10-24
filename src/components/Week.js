import React, { useState } from "react";
import tasks from "../stubs/tasks";
import Day from "./Day";
import DayExpanded from "./DayExpanded";
import "../styles/index.css";

let Week = () => {
  let [expandedDay, setExpandedDay] = useState(null);
  let days = [
    { day: "Monday", tasks: [tasks[0], tasks[1]] },
    { day: "Tuesday", tasks: [tasks[2], tasks[3]] },
    { day: "Wednesday", tasks: [tasks[4], tasks[5]] },
    { day: "Thursday", tasks: [tasks[1], tasks[4]] },
    { day: "Friday", tasks: [tasks[2], tasks[3]] },
    { day: "Saturday", tasks: [tasks[1], tasks[4], tasks[5]] },
    { day: "Sunday", tasks: [tasks[0], tasks[1], tasks[2], tasks[3], tasks[4], tasks[5]] },
  ];
  let toggleDayExpanded = (dayName) => {
    if (expandedDay === dayName) {
      setExpandedDay(null);
    } else {
      setExpandedDay(dayName);
    }
  };
  return (
    <div className="container" style={{ zIndex: 99 }}>
      <h1 className="text-center my-4">Week Planner</h1>
      <div className="row">
        {days.map((day) => (
          <div key={day.day} className="col-md-4" onClick={() => toggleDayExpanded(day.day)}>
            <Day name={day.day} tasks={day.tasks}></Day>
            {expandedDay === day.day && <DayExpanded name={day.day} tasks={day.tasks} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Week;
