import React, { useState } from "react";
import AsyncSelect from "react-select/async";

import IconHappy from "../icons/IconHappy";
import IconSatisfied from "../icons/IconSatisfied";
import IconWow from "../icons/IconWow";
import IconNormal from "../icons/IconNormal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../assets/svg/Calendar.svg";
import IconPlus from "../icons/IconPlus";
import ExtensionDate from "./ExtensionDate";

const TaskDetails = () => {
  const colourOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles1 = {
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    container: (provided) => ({
      ...provided,
      width: 270,
      marginBottom: 16,
      fontSize: 16,
      display: "block",
    }),
    control: (base, state) => ({
      ...base,
      border: "1px solid #ededed",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {},
      height: 46,
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

  const customStyles2 = {
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    container: (provided) => ({
      ...provided,
      width: 374,
      marginBottom: 16,
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

  const [date, setDate] = useState(null);

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

  const [extensionDate, setExtensionDate] = useState([
    {
      name: { value: "nam", label: "Nam" },
      date: new Date(),
    },
    { name: { value: "ngoc", label: "Ngoc" }, date: new Date() },
  ]);

  const handleAddExtension = () => {
    setExtensionDate((prevState) => {
      return [{ name: null, date: null }, ...prevState];
    });
  };

  const removeHandler = (name) => {
    setExtensionDate(extensionDate.filter((el) => el.name !== name));
  };
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="task-detail">
      <div className="task-detail__title">
        <h2>Chi tiết nhiệm vụ</h2>
        <button>x</button>
      </div>
      <div className="task-detail__content">
        <div className="task-detail__container">
          <h3>Thông tin KR</h3>
          <div className="task-detail__select">
            <p className="task-detail__label">Chọn KR</p>
            <AsyncSelect
              classNamePrefix="react-select"
              styles={customStyles1}
              cacheOptions
              loadOptions={loadOptions}
              defaultOptionscustomInputr
            />
          </div>
          <h3>Thông tin task</h3>
          <p className="task-detail__id">Mã: OKG12233</p>
          <div className="task-detail__select-group">
            <div className="task-detail__select">
              <p className="task-detail__label">Người tạo</p>
              <AsyncSelect
                classNamePrefix="react-select"
                styles={customStyles2}
                indicatorSeparator
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                onInputChange={handleInputChange}
                placeholder={"-"}
              />
            </div>
            <div className="task-detail__select">
              <p className="task-detail__label">Người xử lý</p>
              <AsyncSelect
                classNamePrefix="react-select"
                styles={customStyles2}
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                onInputChange={handleInputChange}
                placeholder={"-"}
              />
            </div>
          </div>
          <p className="task-detail__strong">Đánh giá</p>
          <div className="task-detail__emotion-container">
            <IconNormal />
            <IconHappy />
            <IconSatisfied className="emotion-fixed" />
            <IconWow />
          </div>
          <p className="task-detail__label">
            Tên nhiệm vụ
            <i className="aterisk"> *</i>
          </p>
          <input type="text" className="task-detail__input" />
          <p className="task-detail__label">
            Ngày YC HT
            <i className="aterisk"> *</i>
          </p>
          <div className="datepicker-container">
            <DatePicker
              dateFormat="dd/MM/yyyy"
              className="datepicker"
              selected={date}
              onChange={(date) => setDate(date)}
              placeholderText="-"
            />
            <span className="icon-container">
              <img src={calendarIcon} className="icon" />
            </span>
          </div>
          <p className="task-detail__label">
            Mô tả
            <i className="aterisk"> *</i>
          </p>
          <input type="text" className="task-detail__input" />
          <p className="task-detail__label">
            Kết quả mong muốn
            <i className="aterisk"> *</i>
          </p>
          <input type="text" className="task-detail__input" />
          <p className="task-detail__label">Trạng thái</p>
          <AsyncSelect
            classNamePrefix="react-select"
            styles={customStyles1}
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions
            onInputChange={handleInputChange}
            placeholder={"-"}
          />
          <div className="heading-container">
            <h3>Ngày gia hạn</h3>
            <button onClick={handleAddExtension}>
              <IconPlus /> Thêm
            </button>
          </div>
          {extensionDate.map((el) => {
            return (
              <ExtensionDate
                key={Math.random()}
                name={el.name}
                date={el.date}
                removeHandler={removeHandler}
              />
            );
          })}
          <div className="heading-container">
            <h3>Danh sách Timesheet</h3>
            <button className="timesheet-button" onClick={handleAddExtension}>
              Khai báo timesheet
            </button>
          </div>
          <div className="timesheet-table">
            <table>
              <thead>
                <tr>
                  <th>Ngày thực hiện</th>
                  <th>Thời gian thực hiện</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="timesheet-table__date">12/01/2022</td>
                  <td className="timesheet-table__time">8h</td>
                </tr>
                <tr>
                  <td className="timesheet-table__date">12/01/2022</td>
                  <td className="timesheet-table__time">8h</td>
                </tr>{" "}
              </tbody>
            </table>
          </div>
          <div className="task-detail__footer">
            <button onClick={handleAddExtension}>Hủy</button>
            <button
              className="task-detail__footer__save-btn"
              onClick={handleAddExtension}
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
