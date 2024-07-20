import React from "react";

import "./TypeSelector.scss";

const TypeSelector = ({ text, typeRef }) => {
  return (
    <div className="change-item-wrapper">
      <select
        name="change-item"
        id="change-item"
        className="change-item"
        ref={typeRef}
      >
        <option value="default">Нет</option>
        <option value="full-name">ФИО</option>
        <option value="age">Возраст</option>
        <option value="gender">Пол</option>
        <option value="address">Адрес</option>
      </select>
      <label htmlFor="change-item" className="signature-select">
        {text}
      </label>
    </div>
  );
};

export default TypeSelector;
