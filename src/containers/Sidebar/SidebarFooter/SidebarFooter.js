import React from "react";
import "./SidebarFooter.scss";

export default function SidebarFooter() {
  return (
    <>
      <div className="footer-block">
        <div>About Press Copyright</div>
        <div>Contact us Creators</div>
        <div>Advertise Developers</div>
      </div>
      <div className="footer-block">
        <div>Terms Privacy</div>
        <div>Policy & Safety</div>
        <div>Test new features</div>
      </div>
      <div className="footer-block copyright">
        <div>© 2019 YourTube, LLC</div>
      </div>
    </>
  );
}
