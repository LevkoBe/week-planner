import React from "react";
import "./DayCell.css";

const DayCell = ({ day, tasks }) => {
  return (
    <div className={day.isCurrentMonth ? (day.isToday ? "current-day" : "current-month-day") : "non-current-month-day"}>
      <div className="day-cell">
        <div className="day-number">{day.day}</div>
        <div className="tasks-count">{`${tasks.length} tasks`}</div>
        <div className="total-time">{calculateTotalTime(tasks)}</div>
      </div>
    </div>
  );
};

const calculateTotalTime = (tasks) => {
  if (tasks.length === 0) {
    return "-";
  }

  const totalMinutes = tasks.reduce((total, task) => {
    const start = new Date(`2000-01-01T${task.startTime}`);
    const end = new Date(`2000-01-01T${task.endTime}`);
    const minutes = (end - start) / 1000 / 60;
    return total + minutes;
  }, 0);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}m`;
};

export default DayCell;
