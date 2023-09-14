import React from "react";
import logo from "../images/grocery-hub-logo.jpg";
import "../Header.css";

function Header() {
  return (
    <header className="header">
      <div className="div--left">
        <img src={logo} alt="grocery hub logo" className="header--img" />
        <h1>Grocery Hub</h1>
      </div>
      <nav className="div--right">
        <ul>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <li>Home</li>
          </a>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <li>About</li>
          </a>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <li>Groceries</li>
          </a>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <li>Contact Us</li>
          </a>
          <li> | </li>
          <img src={logo} alt="user avatar" className="user--logo" />
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <li>Login</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
