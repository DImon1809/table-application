import React from "react";

import "./AlertBlock.scss";

const AlertBlock = ({ isAlert, alertText }) => {
  return (
    <div className={isAlert ? "alert-block alert" : "alert-block"}>
      <p>{alertText}</p>
    </div>
  );
};

export default AlertBlock;
