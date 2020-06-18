import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footers">
        <ul className="footerLinks">
          <li>
            <a
              href="https://github.com/oslabs-beta/synapse"
              className="footerLi"
              id="github"
            >
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Synapse69098638" className="footerLi">
              Twitter
            </a>
          </li>
          <li>
            <Link to="/tutorial" className="footerLi">
              Tutorial
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/about" className="footerLi">
              About
            </Link>
          </li>
        </ul>
        <p className="firstFooter">
          Built by the{" "}
          <Link to="/about" id="team">
            Synapse Team
          </Link>
          . Licensed under MIT.
        </p>
        <p className="secondFooter">Currently v1.0.0. More updates to come!</p>
      </div>
    </div>
  );
};

export default Footer;
