import React from "react";
import "./Footer.css";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../../assets/Home/shape-bg.png").default}
          alt="you have problem with the image"
        />
      </div>
    </div>
  );
}
