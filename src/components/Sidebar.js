import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const timeStr = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const dayName = now.toLocaleDateString(undefined, { weekday: "long" });
  const dateStr = now.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return {
    timeStr,
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
  const [dateInfo, setDateInfo] = useState(getFormattedDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateInfo(getFormattedDate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { timeStr, today, dayName, dateStr } = dateInfo;

  return (
    <div className={`sidebar-drawer${open ? " open" : ""}`}>
      <div className="sidebar-overlay" onClick={onClose} />
      <aside className="sidebar-content">
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
        </button>
        <div className="sidebar-header">
          <div className="sidebar-time">{timeStr}</div>
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
