import React from "react";
import Footerlinks from "./Footerlinks";
import Logo from "../images/cheers.png"
import { LocalBarOutlined } from "@mui/icons-material"

export default function Footer() {
  return (
    <div>
      <footer className="universal2 footer-add my-8">
        <div className="universal footer-content-box">
          <div className="universal cheers space-x-1">
            <LocalBarOutlined style={{fontSize:"30px"}}/>
            <h1>CockTail</h1>
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
