import React from "react";
import "./HeaderArea.css";
import MainArea from "../MainArea/MainArea";
import FirstHeader from "../../molecules/FirstHeader";
import MiddleHeader from "../../molecules/MiddleHeader";
import ThirdHeader from "../../molecules/ThirdHeader";
function HeaderArea() {
  return (
    <div className="HomePage">
      <div className="header">
        <FirstHeader />
        <MiddleHeader />
        <ThirdHeader />
      </div>
      <MainArea />
    </div>
  );
}
export default HeaderArea;
