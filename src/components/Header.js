import React from "react";
import "./Header.css"; 


function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 18) return "Good evening";
  return "Good night";
}

function Header({ onHamburgerClick }) {
  return (
    <header className="header">
      <div className="header__left">
        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={onHamburgerClick}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="header__center">Expense Tracker</div>

      <div className="header__right">
        <img
          src="/Images/profile pic.png"
          alt="Profile"
          className="profile-pic"
        />
        <span className="greeting">{getGreeting()} Avishek</span>
      </div>
    </header>
  );
}

export default Header;
