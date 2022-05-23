import React, { useState } from "react";
import AsyncSelect from "react-select/async";

const TaskDetails = () => {
  const colourOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "red" : "blue",
      },
      width: 270,
      height: 46,
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
      width: 270,
    }),
  };

  const [inputValue, setInputValue] = useState("");

  const filterColors = (inputValue) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    return inputValue;
  };

  return (
    <div className="task-detail">
      <div className="task-detail__title">
        <h2>Chi tiết nhiệm vụ</h2>
        <button>x</button>
      </div>
      <div className="task-detail__content">
        <h3>Thông tin KR</h3>
        <p>Chọn KR</p>
        <AsyncSelect
          classNamePrefix="react-select"
          styles={customStyles}
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={handleInputChange}
          placeholder={"-"}
        />
      </div>
    </div>
  );
};

export default TaskDetails;
