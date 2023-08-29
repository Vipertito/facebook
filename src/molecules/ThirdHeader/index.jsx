import React from "react";
import { FaPlusCircle, FaFacebookMessenger, FaBell } from "react-icons/fa";
import "./ThirdHeader.css";

const ThirdHeader = () => {
  return (
    <div className="third-header">
      <div className="right-icon">
        <FaPlusCircle fontSize="2rem" />
      </div>
      <div className="right-icon">
        <FaFacebookMessenger fontSize="2rem" />
      </div>
      <div className="right-icon">
        <FaBell fontSize="2rem" />
      </div>
      <div className="right-img">
        <img src="1.jpg" alt="dp" style={{ height: "3.25rem" }} />
      </div>
    </div>
  );
};

export default ThirdHeader;
