import React, { useState } from "react";
import AsyncSelect from "react-select/async";

const TaskDetails = () => {
  const colourOptions = [
    "blue",
    "green",
    "yellow",
    "orange",
    "yellow",
    "red",
    "black",
  ];

  const [inputValue, setInputValue] = useState("");

  const filterColors = (inputValue) => {
    return colourOptions.filter((i) =>
      i.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    setInputValue(inputValue);
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
        <pre>inputValue: "{inputValue}"</pre>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default TaskDetails;
