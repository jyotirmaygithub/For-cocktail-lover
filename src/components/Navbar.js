import React from "react";
import Cheers from "./cheers.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="universal nav-addition">
        <Link className="universal cheers link" to="/">
          <img className="cheers-img" src={Cheers} alt="" />
          <li>Cheers</li>
        </Link>
        <ul className="universal">
          <Link className="link" to="/about">
            <li>About Us</li>
          </Link>
          <Link className="link" to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
