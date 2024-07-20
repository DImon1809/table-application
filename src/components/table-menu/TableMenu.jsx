import { useState, useEffect } from "react";

import SearchSection from "../sections-of-form/search-section/SearchSection";
import SortSection from "../sections-of-form/sort-section/SortSection";

import "./TableMenu.scss";

const TableMenu = ({ searchFetch, error, clearErrors }) => {
  const [isMoveMenu, setIsMoveMenu] = useState(false);

  useEffect(() => {
    setIsMoveMenu(true);
  }, []);

  return (
    <form className={isMoveMenu ? "table-menu move" : "table-menu"}>
      <SearchSection
        searchFetch={searchFetch}
        error={error}
        clearErrors={clearErrors}
      />
      <SortSection />
    </form>
  );
};

export default TableMenu;
