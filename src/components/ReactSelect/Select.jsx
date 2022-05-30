import React from "react";
import AsyncSelect from "react-select/async";

const Select = (props) => {
  let { defaultValue, options, width, onChange, name } = props;

  const customStyles = {
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    container: (provided) => ({
      ...provided,
      width: width,
      // marginBottom: 16,
      fontSize: 16,
      display: "inline-block",
    }),
    control: (base, state) => ({
      ...base,
      border: "1px solid #ededed",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {},
      height: 46,
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

  const filterOptions = (inputValue) => {
    return options.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    return inputValue;
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterOptions(inputValue));
    }, 1000);
  };

  const handleChange = (value) => {
    console.log(value);

    console.log(onChange);

    onChange(name, value);
  };
  return (
    <AsyncSelect
      classNamePrefix="react-select"
      styles={customStyles}
      loadOptions={loadOptions}
      cacheOptions
      defaultOptions
      onInputChange={handleInputChange}
      placeholder={props.placeholder ? props.placeholder : "-"}
      onChange={handleChange}
      defaultValue={defaultValue}
    />
  );
};

export default Select;
