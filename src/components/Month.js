import React, { useState, useEffect } from "react";

const Month = () => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const prevMonthLastDate = new Date(currentYear, currentMonth, 0).getDate();

    const firstDay = firstDayOfMonth.getDay(); // 0 - Sunday, 1 - Monday, ...

    const totalDays = lastDayOfMonth.getDate();
    const totalDaysInPrevMonth = firstDay === 0 ? 6 : firstDay - 1;

    const nextMonthDays = 42 - (totalDays + totalDaysInPrevMonth);

    const prevMonth = [];
    const currentMonthDays = [];
    const nextMonth = [];

    for (let i = totalDaysInPrevMonth; i > 0; i--) {
      prevMonth.unshift(prevMonthLastDate - i + 1);
    }

    for (let i = 1; i <= totalDays; i++) {
      currentMonthDays.push(i);
    }

    for (let i = 1; i <= nextMonthDays; i++) {
      nextMonth.push(i);
    }

    const calendarArray = [...prevMonth, ...currentMonthDays, ...nextMonth];
    const calendarRows = [];

    for (let i = 0; i < 6; i++) {
      const week = calendarArray.slice(i * 7, (i + 1) * 7);
      calendarRows.push(week);
    }

    setCalendar(calendarRows);
  }, []);

  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div style={{ display: "inline-block", verticalAlign: "middle", margin: "2%", zIndex: 99 }}>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            {dayLabels.map((label, index) => (
              <th key={index} style={{ textAlign: "center" }}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => (
                <td key={index} style={{ textAlign: "center" }}>
                  {day}
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
