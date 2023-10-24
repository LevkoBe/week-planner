import React, { useState } from "react";
import tasks from "../stubs/tasks";
import Day from "./Day";
import DayExpanded from "./DayExpanded";
import "../styles/index.css";

const Week = () => {
  const [expandedDay, setExpandedDay] = useState(null);
  const [tasksData, setTasksData] = useState({
    Monday: [tasks[0], tasks[1]],
    Tuesday: [tasks[2], tasks[3]],
    Wednesday: [tasks[4], tasks[5]],
    Thursday: [tasks[1], tasks[4]],
    Friday: [tasks[2], tasks[3]],
    Saturday: [tasks[1], tasks[4], tasks[5]],
    Sunday: [tasks[0], tasks[1], tasks[2], tasks[3], tasks[4], tasks[5]],
  });

  const toggleDayExpanded = (dayName) => {
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
        {Object.keys(tasksData).map((day) => (
          <div key={day} className="col-md-4" onClick={() => toggleDayExpanded(day)}>
            <Day name={day} tasks={tasksData[day]} />
            {expandedDay === day && <DayExpanded name={day} tasks={tasksData[day]} setTasksData={setTasksData} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Week;
