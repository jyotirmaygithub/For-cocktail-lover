import React from "react";
import Footerlinks from "./Footerlinks";
import Logo from "./cheers.png";

export default function Footer() {
  return (
    <div>
      <footer className="universal2 footer-add">
        <div className="universal footer-content-box">
          <div className="universal cheers">
            <img className="footer-logo" src={Logo} alt="logo" />
            <h1>Cheers</h1>
          </div>
          <div>
            <Footerlinks />           
          </div>
        </div>
        <div>
          <p className="footer-link">
            &copy; 2023 Cheers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
