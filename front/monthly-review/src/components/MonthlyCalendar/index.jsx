import { useState } from "react";
import DayCell from "../DayCell";
import "./index.css";
import DropdownList from "../../components/DropdownList";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function MonthlyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const emptyCells = Array.from({ length: firstDayOfMonth });

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const monthOptions = months.map((monthName, index) => ({
    label: monthName,
    value: index,
  }));

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div>
          <h1>
            {months[month]} {year}
          </h1>
        </div>

        <div className="actions">
          <DropdownList
            options={monthOptions}
            value={month}
            onChange={(e) =>
              setCurrentDate(new Date(year, Number(e.target.value), 1))
            }
          />

          <button>Create</button>
        </div>
      </div>

      <div className="weekdays">
        <span>SUN</span>
        <span>MON</span>
        <span>TUE</span>
        <span>WED</span>
        <span>THU</span>
        <span>FRI</span>
        <span>SAT</span>
      </div>

      <div className="calendar-grid">
        {emptyCells.map((_, index) => (
          <div key={`empty-${index}`} className="empty-cell" />
        ))}

        {days.map((day) => (
          <DayCell key={day} day={day} events={[]} />
        ))}
      </div>
    </div>
  );
}
