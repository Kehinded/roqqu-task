import React from "react";
import Button from "../fragments/Button";
import "../styles/Start.css";

const StartSection = () => {
  return (
    <div className="start-section">
      <div className="content-box">
        <div className="box-1">
          <p className="text">Your trading journey starts now</p>
          <p className="heading">The cryptocurrency market is waiting</p>
          <p className="text">Start trading today</p>
        </div>
        {/* end of box one */}
        <div className="box-2">
          <Button text="Open Exchange" />
        </div>
      </div>
      {/* content-box-end */}
    </div>
  );
};

export default StartSection;
