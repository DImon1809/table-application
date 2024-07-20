import React, { useState, useRef } from "react";

import TypeSelector from "../../UI/selector/TypeSelector";
import BlueButton from "../../UI/button/BlueButton";

import "./SortSection.scss";

const SortSection = () => {
  const [sortValue, setSortValue] = useState("");
  const sortFieldRef = useRef();

  return (
    <div className="sort-section">
      <div className="sort-wrapper">
        <select name="sort-by" id="sort-by" className="sort-by">
          <option value="default">Нет</option>
          <option value="increase">Возрастание</option>
          <option value="decreasing">Убывание</option>
        </select>
        <label htmlFor="sort-by" className="signature-select">
          Выбрать тип сортировки
        </label>
      </div>
      <TypeSelector text="Выбрать поле сортировки" />

      <BlueButton buttonText="Сортировать" />
    </div>
  );
};

export default SortSection;
