import React from "react";
import Footerlinks from "./Footerlinks";
import { useNavigate } from "react-router-dom";
import { LocalBarOutlined } from "@mui/icons-material";

export default function Footer() {
  const  navigation  = useNavigate();

  function handleLogo() {
    navigation(`/`);
  }
  return (
    <div>
      <footer className="universal2 footer-add my-5">
        <div className="universal footer-content-box">
          <div className="universal cheers space-x-1 cursor-pointer" onClick={handleLogo}>
            <LocalBarOutlined style={{ fontSize: "30px" }} />
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
