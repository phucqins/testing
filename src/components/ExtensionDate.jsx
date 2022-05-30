import React, { useState } from "react";
import IconMultiply from "../icons/IconMultiply";
import AsyncSelect from "react-select/async";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../assets/svg/Calendar.svg";

const ExtensionDate = (props) => {
  const [date, setDate] = useState(null);

  const customStyles3 = {
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    container: (provided) => ({
      ...provided,
      width: 330,
      fontSize: 16,
      display: "inline-block",
    }),
    control: (base, state) => ({
      ...base,
      border: "1px solid #ededed",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {},
      height: 50,
      outline: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      padding: 20,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#7A7A7A",
    }),
  };
  const removeHandler = (name) => {
    props.removeHandler(name);
  };

  //   const loadOptions = (inputValue, callback) => {
  //     setTimeout(() => {
  //       callback(filterColors(inputValue));
  //     }, 1000);
  //   };
  return (
    <div className="extension-date__container">
      {/* --------------------------- */}
      {/* {props.name.value ? (
        <AsyncSelect
          classNamePrefix="react-select"
          styles={customStyles3}
          cacheOptions
          loadOptions={props.loadOptions}
          placeholder={"Người gia hạn"}
          defaultValue={{ value: props.name.value, label: props.name.label }}
          onInputChange={props.handleInputChange}
        />
      ) : (
        <AsyncSelect
          classNamePrefix="react-select"
          styles={customStyles3}
          cacheOptions
          loadOptions={props.loadOptions}
          placeholder={"Người gia hạn"}
          defaultValue={{ value: "ngoc", label: "Ngoc" }}
          onInputChange={props.handleInputChange}
        />
      )} */}
      <AsyncSelect
        classNamePrefix="react-select"
        styles={customStyles3}
        cacheOptions
        loadOptions={props.loadOptions}
        placeholder={"Người gia hạn"}
        defaultValue={props.name}
        onInputChange={props.handleInputChange}
      />
      {/* --------------------------- */}
      <div className="datepicker-container">
        <DatePicker
          className="datepicker"
          selected={props.date}
          onChange={props.setDate}
          placeholderText="-"
        />
        <span className="icon-container">
          <img src={calendarIcon} className="icon" />
        </span>
      </div>
      {/* --------------------------- */}
      <button
        onClick={() => {
          removeHandler(props.name);
        }}
        className="extension-date__cancel"
      >
        <IconMultiply />
      </button>
    </div>
  );
};

export default ExtensionDate;
