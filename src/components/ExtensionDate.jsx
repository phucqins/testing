import React, { useState } from "react";
import IconMultiply from "../icons/IconMultiply";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../assets/svg/Calendar.svg";
import Select from "./ReactSelect/Select";

const ExtensionDate = (props) => {

  const { value, name, onChange, options } = props;
  const removeHandler = (name) => {
    console.log(name);
    props.removeHandler(name);
  };



  const handleDateSelect = (value) => {
    props.onChange(`${props.name}.date`, value);
    setDate(value);
  };

  return (
    <div className="extension-date__container">
      <Select
        width={374}
        options={options}
        defaultValue={value}
        name={`${name}.name`}
        onChange={onChange}
        placeholder={"Người gia hạn"}
      />
      <div className="datepicker-container">
        <DatePicker
          dateFormat="dd/MM/yyyy"
          className="datepicker"
          name={`${name}.date`}
          selected={date}
          onChange={handleDateSelect}
          placeholderText="-"
        />
        <span className="icon-container">
          <img src={calendarIcon} className="icon" />
        </span>
      </div>
      <button
        type="button"
        onClick={() => {
          removeHandler(value);
        }}
        className="extension-date__cancel"
      >
        <IconMultiply />
      </button>
    </div>
  );
};

export default ExtensionDate;
