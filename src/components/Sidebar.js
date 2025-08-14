import React from "react";
import "./Sidebar.css";
import {
  FaHome,
  FaMoneyBillWave,
  FaChartPie,
  FaRegListAlt,
  FaUserCircle,
  FaCog,
  FaInfoCircle,
} from "react-icons/fa";

function getFormattedDate() {
  const now = new Date();
  const dayName = now.toLocaleDateString(undefined, { weekday: "long" });
  const dateStr = now.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return {
    today: now.toLocaleDateString(),
    dayName,
    dateStr,
  };
}

export default function Sidebar({
  open,
  onClose,
  profileName = "Avishek Sen",
}) {
  <button
    onClick={onClose}
    aria-label="close sidebar"
    className="sidebar-close-btn"
    style={{
      background: "none",
      border: "none",
      fontSize: "1.5em",
      cursor: "pointer",
      position: "absolute",
      top: "1em",
      right: "1em",
    }}
  >
    ×
  </button>;
  const { today, dayName, dateStr } = getFormattedDate();

  return (
    <div className={`sidebar-drawer${open ? " open" : ""}`}>
      <div className="sidebar-overlay" onClick={onClose} />
      <aside className="sidebar-content">
        <div className="sidebar-header">
          <div className="sidebar-date">{today}</div>
          <div className="sidebar-day">{dayName}</div>
          <div className="sidebar-full-date">{dateStr}</div>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <FaHome className="sidebar-icon" /> Home
            </li>
            <li>
              <FaMoneyBillWave className="sidebar-icon" /> Transactions
            </li>
            <li>
              <FaChartPie className="sidebar-icon" /> Budgets
            </li>
            <li>
              <FaRegListAlt className="sidebar-icon" /> All Spending
            </li>
          </ul>
          <div className="sidebar-spacer" />
          <ul>
            <li>
              <FaUserCircle className="sidebar-icon" /> {profileName}
            </li>
            <li>
              <FaCog className="sidebar-icon" /> Settings
            </li>
            <li>
              <FaInfoCircle className="sidebar-icon" /> About
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}