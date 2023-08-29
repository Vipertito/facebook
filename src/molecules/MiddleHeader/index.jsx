import React from "react";
import { AiFillHome, AiOutlineWallet } from "react-icons/ai";
import { FaRegFlag, FaUsers } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import "./SecondHeader.css";

const MiddleHeader = () => {
  return (
    <div className="middle-header">
      <div className="Icon">
        <AiFillHome fontSize="2.3rem" color="#1877f2" />
      </div>
      <div className="Icon">
        <FaRegFlag fontSize="2.3rem" />
      </div>
      <div className="Icon">
        <MdOndemandVideo fontSize="2.3rem" />
      </div>
      <div className="Icon">
        <FaUsers fontSize="2.3rem" />
      </div>
      <div className="Icon">
        <AiOutlineWallet fontSize="2.3rem" />
      </div>
    </div>
  );
};

export default MiddleHeader;
