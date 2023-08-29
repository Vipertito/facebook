import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./FirstHeader.css";

const FirstHeader = () => {
  return (
    <div className="first-header">
      <div className="logo">
        <img
          src="Facebook-logo.png"
          alt="logo"
          style={{ height: "50px", padding: "1rem" }}
        />
      </div>
      <div className="Search">
        <AiOutlineSearch style={{ height: "4rem" }} />
        <input placeholder="Search Facebook" type="Search" />
      </div>
    </div>
  );
};

export default FirstHeader;
