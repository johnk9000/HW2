import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"

function Nav(props) {
  const location = useLocation();

  return (
  <nav class="navbar">
    <div class="nav-brand">JK</div>
    <ul className="nav">
      <li className="nav-item">
      <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/proj"
          className={location.pathname === "/proj" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>

      </li>
      <li className="nav-item">
      <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>

      </li>
    </ul>
  </nav>
  );
}

export default Nav;
