import React from "react";
import "./Month.css";
import DayCell from "./DayCell";

const Month = ({ tasks }) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const prevMonthLastDate = new Date(currentYear, currentMonth, 0).getDate();
  const firstDay = firstDayOfMonth.getDay(); // 0 - Sunday, 1 - Monday, ...

  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  const totalDaysInPrevMonth = firstDay === 0 ? 6 : firstDay - 1;
  const nextMonthDays = 42 - (totalDays + totalDaysInPrevMonth);

  const prevMonth = [];
  const currentMonthDays = [];
  const nextMonth = [];

  for (let i = totalDaysInPrevMonth; i > 0; i--) {
    const prevMonthDate = new Date(currentYear, currentMonth - 1, prevMonthLastDate - i + 1);
    prevMonth.unshift({ day: prevMonthDate.toDateString(), isCurrentMonth: false });
  }

  for (let i = 1; i <= totalDays; i++) {
    const currentMonthDate = new Date(currentYear, currentMonth, i);
    currentMonthDays.push({ day: currentMonthDate.toDateString(), isCurrentMonth: true, isToday: i === currentDate.getDate() });
  }

  for (let i = 1; i <= nextMonthDays; i++) {
    const nextMonthDate = new Date(currentYear, currentMonth + 1, i);
    nextMonth.push({ day: nextMonthDate.toDateString(), isCurrentMonth: false });
  }

  const calendarArray = [...prevMonth, ...currentMonthDays, ...nextMonth];
  const calendarRows = [];

  for (let i = 0; i < 6; i++) {
    const week = calendarArray.slice(i * 7, (i + 1) * 7);
    calendarRows.push(week);
  }

  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="month-container">
      <h2>{currentDate.toLocaleString("en-US", { month: "long" })}</h2>
      <table className="month-table">
        <thead>
          <tr>
            {dayLabels.map((label, index) => (
              <th key={index} className="day-label">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {console.log(tasks)}
          {calendarRows.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => (
                <td key={index}>
                  <DayCell day={day} tasks={tasks.filter((task) => task.day === day.day)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Month;
