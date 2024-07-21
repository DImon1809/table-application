import React, { useRef } from "react";

import TypeSelector from "../../UI/selector/TypeSelector";
import BlueButton from "../../UI/button/BlueButton";

import "./SortSection.scss";

const SortSection = ({ error, handleSortData }) => {
  const typeOfSort = useRef();
  const sortCellRef = useRef();

  const handlerSort = () =>
    handleSortData(typeOfSort.current.value, sortCellRef.current.value);

  return (
    <div className="sort-section">
      <div className="sort-wrapper">
        <select
          name="sort-by"
          id="sort-by"
          className="sort-by"
          ref={typeOfSort}
        >
          <option value="default">Нет</option>
          <option value="increase">Возрастание</option>
          <option value="decreasing">Убывание</option>
        </select>
        <label htmlFor="sort-by" className="signature-select">
          Выбрать колонку сортировки
        </label>
      </div>
      <TypeSelector text="Выбрать поле сортировки" fieldRef={sortCellRef} />

      <BlueButton buttonText="Сортировать" buttonFunction={handlerSort} />
    </div>
  );
};

export default SortSection;
