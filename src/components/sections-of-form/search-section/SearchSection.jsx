import React, { useState, useRef, useEffect } from "react";

import TypeSelector from "../../UI/selector/TypeSelector";
import BlueButton from "../../UI/button/BlueButton";

import "./SearchSection.scss";

const SearchSection = ({ handleSearchData, error, clearErrors }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchFieldRef = useRef();

  const [isNoValid, setIsNoValid] = useState(false);

  const [isSearch, setIsSearch] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchFieldRef.current.value === "default" && !isSearch) return;

    setSearchValue("");

    handleSearchData(searchFieldRef.current.value, searchValue.trim());

    if (!isSearch) return setIsSearch(true);

    return setIsSearch(false);
  };

  const returnToBack = (event) => {
    searchFieldRef.current.value = "default";

    handleSearch(event);
  };

  const handleChangeValue = (event) => {
    setIsNoValid(false);

    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (error === "Заполните поле!") setIsNoValid(true);
  }, [error]);

  return (
    <div className="search-section">
      <TypeSelector text="Выбрать колонку поиска" fieldRef={searchFieldRef} />

      <div className="search-wrapper">
        <input
          type="text"
          name="search-input"
          id="search-input"
          className={isNoValid ? "search-input no-valid" : "search-input"}
          placeholder=" "
          value={searchValue}
          onChange={handleChangeValue}
        />
        <label htmlFor="search-input" className="signature-search">
          Введите текст поиска
        </label>
      </div>

      {isSearch ? (
        <BlueButton buttonText="отменить" buttonFunction={returnToBack} />
      ) : (
        <BlueButton buttonText="искать" buttonFunction={handleSearch} />
      )}
    </div>
  );
};

export default SearchSection;
