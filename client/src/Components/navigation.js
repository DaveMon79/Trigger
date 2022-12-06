import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import Auth from '../Utils/auth';

function Navigation({ currentPage, handlePageChange }) {
  console.log('Nav', Auth.getProfile())
  return(
  <nav className="navbar navbar-expand-lg" style={{ padding: "0" }}>
    <div style={{ color: "#f2faf5",  backgroundColor: "#718C7B" }} className="container-fluid">

      <div  className="" id="navbarExample01">
        <ul style={{ fontSize: "3vh",  }} className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active ms-5 ">
            <Link style={{ color: "#f2faf5" }} className="nav-link" to="/about">ABOUT</Link>
          </li>
          <li className="nav-item ms-5">
            <Link style={{ color: "#f2faf5" }} className="nav-link" to="/pets">REHOME A PET</Link>
          </li>
          <li className="nav-item ms-5 ">
            <Link style={{ color: "#f2faf5" }} className="nav-link" to="/advice">PET CARE ADVICE</Link>
          </li>
          <li className="nav-item ms-5">
            <Link style={{ color: "#f2faf5" }} className="nav-link" to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>

      <div  style={{ marginRight: "10vh" }}>
      <ul style={{ fontSize: "3vh" }} className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active ms-2">
            <Link style={{ color: "#f2faf5" }} className="nav-link" to="/login">LOGIN</Link>
          </li>
          <li className="nav-item active ms-2 me-2">
          <Link style={{ color: "#f2faf5" }} className="nav-link" to="/signup">SIGNUP</Link>
          </li>
          <h4 style={{ fontSize: "5vh" }} className="nav-item mt-1">|</h4>
          <li className="nav-item ms-2">
          <Link style={{ color: "#f2faf5" }} className="nav-link " to={`/dashboard/${Auth.getProfile()?.data?._id}`}>MY TRIGGER</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
/*     {Auth.loggedIn() ? (
              <li className="nav-item active ms-2 me-2">
                <a style={{ color: "#f2faf5" }} className="nav-link" aria-current="page" href="/" onClick={() => Auth.logout()}>LOG OUT</a>
              </li>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active ms-2">
                  <a style={{ color: "#f2faf5" }} className="nav-link" aria-current="page" href="/login">LOGIN</a>
                </li>

                <li className="nav-item active ms-2 me-2">
                  <a style={{ color: "#f2faf5" }} className="nav-link" aria-current="page" href="/signup">SIGNUP</a>
                </li>
              </ul>
  ) */
  )}

export default Navigation;