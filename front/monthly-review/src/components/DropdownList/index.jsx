import DownArrow from "../../assets/down.svg";
import "./index.css";

export default function DropdownList({ options, value, onChange }) {
  return (
    <div className="dropdown-wrapper">
      <select value={value} onChange={onChange} className="dropdown-select">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <img src={ DownArrow } alt="arrow" className="dropdown-icon" />
    </div>
  );
}
