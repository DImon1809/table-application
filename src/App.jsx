import React, { useState, useEffect } from "react";

import { useFetchData } from "./hooks/useFetchData";

import { useSortConditions } from "./hooks/useSortConditions";

import UsersTable from "./components/table/UsersTable";
import TableMenu from "./components/table-menu/TableMenu";
import AlertBlock from "./components/alert/AlertBlock";
import ModuleWindow from "./components/module-window/ModuleWindow";

import "./App.scss";

const App = () => {
  const { sortConditions } = useSortConditions();

  const { clearErrors, error, getUsers, isLoading, searchFetch, users } =
    useFetchData();

  const [isAlert, setIsAlert] = useState(false);
  const [alertText, setAlertText] = useState("Внимание!");

  const [data, setData] = useState([]);
  const [sortData, setSortData] = useState([]);

  const [activeCell, setActiveCell] = useState("");

  const [isModuleWindow, setIsModuleWindow] = useState(false);
  const [dataModuleWindow, setDataModuleWindow] = useState({});

  const handleChangeIsAlert = (text) => {
    setIsAlert(true);
    setAlertText(text);

    setTimeout(() => {
      setIsAlert(false);
    }, 2000);
  };

  const handleSearchData = (cellOfSearch, searchValue) => {
    setActiveCell(cellOfSearch);

    searchFetch(cellOfSearch, searchValue);
  };

  const handleSortData = (typeOfSort, cellOfSort) => {
    if (typeOfSort === "default" || cellOfSort === "default") setSortData(data);

    setActiveCell(cellOfSort);

    setSortData((state) => {
      const _temp = [...state].sort((left, right) =>
        sortConditions(left, right, typeOfSort, cellOfSort)
      );

      return _temp;
    });
  };

  const openModuleWindow = (id) => {
    setIsModuleWindow(true);

    setDataModuleWindow(data.find((user) => user.id === id));
  };

  const closeModuleWindow = () => setIsModuleWindow(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    setData(users);
    setSortData(users);
  }, [users]);

  useEffect(() => {
    if (error) {
      handleChangeIsAlert(error);
      clearErrors();
    }
  }, [error, clearErrors, handleChangeIsAlert]);

  return (
    <>
      {isModuleWindow ? (
        <div className="global-wrapper" onClick={closeModuleWindow}></div>
      ) : (
        ""
      )}
      <TableMenu
        handleSearchData={handleSearchData}
        error={error}
        clearErrors={clearErrors}
        handleSortData={handleSortData}
      />
      <UsersTable
        isLoading={isLoading}
        activeCell={activeCell}
        data={sortData}
        openModuleWindow={openModuleWindow}
      />
      <AlertBlock isAlert={isAlert} alertText={alertText} />
      {isModuleWindow ? (
        <ModuleWindow
          dataModuleWindow={dataModuleWindow}
          closeModuleWindow={closeModuleWindow}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
