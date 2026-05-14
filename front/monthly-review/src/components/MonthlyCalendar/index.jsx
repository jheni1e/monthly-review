import DayCell from "../DayCell";
import { mockEvents } from "../../mocks/mockEvents";
import "./index.css";

export default function MonthlyCalendar() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1>January 2026</h1>
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
        {days.map((day) => (
          <DayCell key={day} day={day} events={mockEvents} />
        ))}
      </div>
    </div>
  );
}
