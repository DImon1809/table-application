import React, { useState, useRef, useEffect } from "react";

import TypeSelector from "../../UI/selector/TypeSelector";
import BlueButton from "../../UI/button/BlueButton";

import "./SearchSection.scss";

const SearchSection = ({ searchFetch, error, clearErrors }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchFieldRef = useRef();

  const [isNoValid, setIsNoValid] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();

    searchFetch(searchFieldRef.current.value, searchValue.trim());
  };

  const handleChangeValue = (event) => {
    setIsNoValid(false);

    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (error === "Заполните поля!") setIsNoValid(true);
  }, [error]);

  return (
    <div className="search-section">
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
          Искать
        </label>
      </div>

      <TypeSelector text="Выбрать поле поиска" typeRef={searchFieldRef} />

      <BlueButton buttonText="искать" buttonFunction={handleSearch} />
    </div>
  );
};

export default SearchSection;
