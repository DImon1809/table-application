import React, { useState, useEffect } from "react";

import Loading from "../loading/Loading";

import "./UsersTable.scss";

const UsersTable = ({
  handleChangeIsAlert,
  clearErrors,
  error,
  getUsers,
  isLoading,
  users,
}) => {
  const [data, setData] = useState([]);

  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    setData(users);
  }, [users]);

  useEffect(() => {
    if (error) {
      handleChangeIsAlert(error);
      clearErrors();
    }
  }, [error, clearErrors, handleChangeIsAlert]);

  return (
    <main className="main">
      <table className="main-table">
        <thead className="head-table">
          <tr className="head-table-row">
            <td>Номер</td>
            <td className="item-table">ФИО</td>
            <td className="item-table">Возраст</td>
            <td className="item-table">Пол</td>
            <td className="item-table">Номер телефона</td>
            <td className="item-table">Адрес</td>
          </tr>
        </thead>

        <tbody className="body-table">
          {!isLoading &&
            data.length > 0 &&
            data.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
                <td>{`${user.address.city} ${user.address.address}`}</td>
              </tr>
            ))}
        </tbody>
      </table>

      {!isLoading && data.length === 0 && (
        <div className="empty-title">
          <h3>Ничего не найдено</h3>
        </div>
      )}

      {isLoading && <Loading />}
    </main>
  );
};

export default UsersTable;
