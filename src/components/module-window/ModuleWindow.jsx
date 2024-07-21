import React from "react";

import InputInfo from "../UI/input-info/InputInfo";

import LeaveButton from "../UI/leave-button/LeaveButton";

import "./ModuleWindow.scss";

const fields = [
  { name: "ФИО", firstValue: "firstName", secondValue: "lastName" },
  { name: "Возраст", firstValue: "age" },
  { name: "Адрес", firstValue: "city", secondValue: "address" },
  { name: "Рост", firstValue: "height" },
  { name: "Вес", firstValue: "weight" },
  { name: "Мобильный", firstValue: "phone" },
  { name: "Емаил", firstValue: "email" },
];

const ModuleWindow = ({ dataModuleWindow, closeModuleWindow }) => {
  return (
    <div className="module-window">
      <LeaveButton leaveButtonFunction={closeModuleWindow} />
      {fields.map((field, index) => {
        // console.log(dataModuleWindow.address[field.firstValue]);
        return (
          <InputInfo
            key={index}
            dataModuleWindow={dataModuleWindow}
            name={field.name}
            firstValue={
              field.name === "Адрес"
                ? dataModuleWindow.address[field.firstValue]
                : dataModuleWindow[field.firstValue]
            }
            secondValue={
              field?.secondValue
                ? field.name === "Адрес"
                  ? dataModuleWindow.address[field.secondValue]
                  : dataModuleWindow[field.secondValue]
                : ""
            }
          />
        );
      })}
    </div>
  );
};

export default ModuleWindow;
