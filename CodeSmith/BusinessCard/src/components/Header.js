import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="smallLogo" />
      <ul className="leftHeader">
        <li className="headerItems">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="headerItems">
          <Link to="/docs" className="nav-link">
            Docs
          </Link>
        </li>
        <li className="headerItems">
          <Link to="/tutorial" className="nav-link">
            Tutorial
          </Link>
        </li>
        <li className="headerItems">
          <Link to="/demo" className="nav-link">
            Demo
          </Link>
        </li>
        <li className="headerItems">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="headerItems">
          <a
            href="https://github.com/oslabs-beta/synapse"
            className="nav-link"
            id="github"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
