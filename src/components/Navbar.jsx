import React from "react";
import { useGlobleContext } from "../context/appContext";

function Navbar() {
  const { activeLink, scrolled } = useGlobleContext();

  return (
    <nav
      className={
        scrolled
          ? "navbar navbar-expand-lg navbar-dark scrolled"
          : "navbar navbar-expand-lg navbar-dark"
      }
    >
      <div className="container-fluid">
        <img
          className="navbar-brand"
          src={require("../assets/img/logo.svg").default}
          alt="logo-svg"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={
                  activeLink === "home" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  activeLink === "skills" ? "nav-link active" : "nav-link"
                }
                href="#skill"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  activeLink === "project" ? "nav-link active" : "nav-link"
                }
                href="#project"
              >
                Projects
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://in.linkedin.com/" target={"blank"}>
                <img
                  src={require("../assets/img/nav-icon1.svg").default}
                  alt="social-1"
                />
              </a>
              <a href="https://facebook.com" target={"blank"}>
                <img
                  src={require("../assets/img/nav-icon2.svg").default}
                  alt="social-2"
                />
              </a>
              <a href="https://instagram.com" target={"blank"}>
                <img
                  src={require("../assets/img/nav-icon3.svg").default}
                  alt="social-2"
                />
              </a>
            </div>
            <a href="/">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
