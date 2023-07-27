import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleClick = () => {
    window.open("https://github.com/punam01", "_blank");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Punam Kumavat. All rights
            reserved.
          </p>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/use">How to Use</Link>
            <Link onClick={handleClick}>Github Repository</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
