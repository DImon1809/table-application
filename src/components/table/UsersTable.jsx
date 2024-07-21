import React, { useState, useEffect } from "react";

import Loading from "../loading/Loading";

import "./UsersTable.scss";

const UsersTable = ({ isLoading, data, activeCell, openModuleWindow }) => {
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
              <tr key={index} onClick={() => openModuleWindow(user.id)}>
                <td>{index + 1}</td>
                <td
                  className={activeCell === "full-name" ? "active-cell" : ""}
                >{`${user.firstName} ${user.lastName}`}</td>
                <td className={activeCell === "age" ? "active-cell" : ""}>
                  {user.age}
                </td>
                <td className={activeCell === "gender" ? "active-cell" : ""}>
                  {user.gender}
                </td>
                <td className={activeCell === "phone" ? "active-cell" : ""}>
                  {user.phone}
                </td>
                <td
                  className={
                    activeCell === "address" ? "active-cell-address" : ""
                  }
                >{`${user.address.city} ${user.address.address}`}</td>
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
