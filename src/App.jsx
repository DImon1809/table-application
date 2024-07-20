import React, { useState } from "react";

import { useFetchData } from "./hooks/useFetchData";

import UsersTable from "./components/table/UsersTable";
import TableMenu from "./components/table-menu/TableMenu";
import AlertBlock from "./components/alert/AlertBlock";

import "./App.scss";

const App = () => {
  const { clearErrors, error, getUsers, isLoading, searchFetch, users } =
    useFetchData();

  const [isAlert, setIsAlert] = useState(false);
  const [alertText, setAlertText] = useState("Внимание!");

  const handleChangeIsAlert = (text) => {
    setIsAlert(true);
    setAlertText(text);

    setTimeout(() => {
      setIsAlert(false);
    }, 2000);
  };

  return (
    <>
      <TableMenu
        searchFetch={searchFetch}
        error={error}
        clearErrors={clearErrors}
      />
      <UsersTable
        handleChangeIsAlert={handleChangeIsAlert}
        clearErrors={clearErrors}
        error={error}
        getUsers={getUsers}
        isLoading={isLoading}
        users={users}
      />
      <AlertBlock isAlert={isAlert} alertText={alertText} />
    </>
  );
};

export default App;
