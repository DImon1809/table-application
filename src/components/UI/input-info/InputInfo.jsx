import React from "react";

import "./InputInfo.scss";

const InputInfo = ({ name, firstValue, secondValue, index }) => {
  return (
    <div className="input-info-wrapper">
      <input
        type="text"
        id={`info-${index}`}
        defaultValue={`${name}: ${firstValue} ${secondValue}`}
        disabled
        className="input-info"
      />
    </div>
  );
};

export default InputInfo;
