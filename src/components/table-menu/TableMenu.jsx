import { useState, useEffect } from "react";

import SearchSection from "../sections-of-form/search-section/SearchSection";
import SortSection from "../sections-of-form/sort-section/SortSection";

import "./TableMenu.scss";

const TableMenu = ({
  handleSearchData,
  error,
  clearErrors,
  handleSortData,
}) => {
  const [isMoveMenu, setIsMoveMenu] = useState(false);

  useEffect(() => {
    setIsMoveMenu(true);
  }, []);

  return (
    <form className={isMoveMenu ? "table-menu move" : "table-menu"}>
      <SearchSection
        handleSearchData={handleSearchData}
        error={error}
        clearErrors={clearErrors}
      />
      <SortSection error={error} handleSortData={handleSortData} />
    </form>
  );
};

export default TableMenu;
