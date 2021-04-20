import React from "react";
import "./footer.style.css";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="py-2 text-center footer-style">
        Made With
        <span style={{ color: "#fc0303" }}>
          {" "}
          <FaHeart />
        </span>
        <br />© Sharmistha Mandal &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
}
