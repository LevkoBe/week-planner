import React from "react";
import "./DayCell.css";

const DayCell = ({ day, tasks }) => {
  return (
    <div className={day.isCurrentMonth ? (day.isToday ? "current-day" : "current-month-day") : "non-current-month-day"}>
      <div className="day-cell">
        <div className="day-number">{day.day}</div>
        <div className="tasks-count">{`${tasks.length} tasks`}</div>
        <div className="total-time">{`${calculateTotalTime(tasks)} hrs`}</div>
      </div>
    </div>
  );
};

const calculateTotalTime = (tasks) => {
  const totalMinutes = tasks.reduce((total, task) => {
    const start = new Date(`2000-01-01T${task.startTime}`);
    const end = new Date(`2000-01-01T${task.endTime}`);
    const minutes = (end - start) / 1000 / 60;
    return total + minutes;
  }, 0);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}.${minutes < 10 ? "0" : ""}${minutes}`;
};

export default DayCell;
