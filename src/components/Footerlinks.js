import React from "react";
import { Link } from "react-router-dom";

export default function Footerlinks() {
  return (
    <div>
      <nav>
        <ul className="universal ">
          <Link className="link footer-link-add" to="/about">
            <li className="footer-link">About</li>
          </Link>
          <Link className="link" to="/contact">
            <li className="footer-link">contact</li>
          </Link>
          <Link to="/api" className="link">
            <li className="footer-link">API</li>
          </Link>
          {/* <Link to="/feedback" className="link">
          <li className="footer-link">Comments</li>
          </Link> */}
        </ul>
      </nav>
    </div>
  );
}
