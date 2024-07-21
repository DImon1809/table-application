import React from "react";

import "./InputInfo.scss";

const InputInfo = ({ name, firstValue, secondValue }) => {
  return (
    <div className="input-info-wrapper">
      <input
        type="text"
        defaultValue={`${name}: ${firstValue} ${secondValue}`}
        disabled
        className="input-info"
      />
    </div>
  );
};

export default InputInfo;
