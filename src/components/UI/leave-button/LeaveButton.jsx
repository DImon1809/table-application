import React from "react";

import "./LeaveButton.scss";

const LeaveButton = ({ leaveButtonFunction }) => {
  return (
    <div className="leave-button" onClick={leaveButtonFunction}>
      <span className="horizontal"></span>
      <span className="vertical"></span>
    </div>
  );
};

export default LeaveButton;
