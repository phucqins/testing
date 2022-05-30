import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import IconHappy from "../icons/IconHappy";
import IconSatisfied from "../icons/IconSatisfied";
import IconWow from "../icons/IconWow";
import IconNormal from "../icons/IconNormal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../assets/svg/Calendar.svg";
import IconPlus from "../icons/IconPlus";
import ExtensionDate from "./ExtensionDate";
import Select from "./ReactSelect/Select";

const TaskDetails = () => {
  const colourOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const formik = useFormik({
    initialValues: {
      krName: {},
      createPerson: "",
      handlePerson: "",
      taskName: "",
      deadLine: "",
      description: "",
      desiredResults: "",
      status: "",
      extensionDate: [
        {
          name: { value: "nam", label: "Nam" },
          date: new Date(),
          id: Math.random(),
        },
        {
          name: { value: "ngoc", label: "Ngoc" },
          date: new Date(),
          id: Math.random(),
        },
      ],
    },
    validationSchema: Yup.object().shape({
      krName: Yup.object().required("Required!"),
      createPerson: Yup.object().required("Required!"),
      handlePerson: Yup.object().required("Required!"),
      taskName: Yup.string().required("Required!"),
      deadLine: Yup.date().required("Required!"),
      description: Yup.string().required("Required!"),
      desiredResults: Yup.string().required("Required!"),
      status: Yup.object().required("Required!"),
      extensionDate: Yup.array([
        { name: Yup.string(), date: Yup.date() },
      ]).required("Required!"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  const [extensionDate, setExtensionDate] = useState(
    formik.values.extensionDate
  );

  const handleAddExtension = () => {
    setExtensionDate([{ name: null, date: null }, ...extensionDate]);
    return formik.values.extensionDate.unshift({
      name: null,
      date: null,
      id: Math.random(),
    });
  };

  const removeHandler = (name) => {
    setExtensionDate(extensionDate.filter((el) => el.name !== name));
    return formik.values.extensionDate.filter((el) => el.name !== name);
  };

  return (
    <form className="task-detail" onSubmit={formik.handleSubmit}>
      <div className="task-detail__title">
        <h2>Chi tiết nhiệm vụ</h2>
        <button>x</button>
      </div>
      <div className="task-detail__content">
        <div className="task-detail__container">
          <h3>Thông tin KR</h3>
          <div className="task-detail__select">
            <p className="task-detail__label">Chọn KR</p>
            <Select
              width={270}
              name="krName"
              options={colourOptions}
              defaultValue={{ value: 2131545, label: "Tang Chi Minh" }}
              onChange={formik.setFieldValue}
            />
          </div>
          <h3>Thông tin task</h3>
          <p className="task-detail__id">Mã: OKG12233</p>
          <div className="task-detail__select-group">
            <div className="task-detail__select">
              <p className="task-detail__label">Người tạo</p>
              <Select
                width={374}
                name="createPerson"
                options={colourOptions}
                defaultValue={{ value: 2131545, label: "Tang Chi Minh" }}
                onChange={formik.setFieldValue}
              />
            </div>
            <div className="task-detail__select">
              <p className="task-detail__label">Người xử lý</p>
              <Select
                width={374}
                options={colourOptions}
                defaultValue={{ value: 2131545, label: "Tang Chi Minh" }}
                name="handlePerson"
                onChange={formik.setFieldValue}
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
          <input
            type="text"
            className="task-detail__input"
            onChange={formik.handleChange}
            name="taskName"
          />
          <p className="task-detail__label">
            Ngày YC HT
            <i className="aterisk"> *</i>
          </p>
          <div className="datepicker-container">
            <DatePicker
              dateFormat="dd/MM/yyyy"
              className="datepicker"
              name="deadLine"
              selected={formik.values.deadLine}
              onChange={(value) => {
                console.log(formik.values.d);
                formik.setFieldValue("deadLine", value);
              }}
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
          <input
            type="text"
            className="task-detail__input"
            onChange={formik.handleChange}
            name="description"
          />
          <p className="task-detail__label">
            Kết quả mong muốn
            <i className="aterisk"> *</i>
          </p>
          <input
            type="text"
            className="task-detail__input"
            onChange={formik.handleChange}
            name="desiredResults"
          />

          <p className="task-detail__label">Trạng thái</p>
          <Select
            width={270}
            options={colourOptions}
            defaultValue={{ value: 2131545, label: "Tang Chi Minh" }}
            name="status"
            onChange={formik.setFieldValue}
          />

          <div className="heading-container">
            <h3>Ngày gia hạn</h3>
            <button type="button" onClick={handleAddExtension}>
              <IconPlus /> Thêm
            </button>
          </div>

          {extensionDate.map((el, i) => {
            return (
              <ExtensionDate
                key={el.id}
                i={i}
                options={colourOptions}
                name={`extensionDate[${i}]`}
                value={el.name}
                onChange={formik.setFieldValue}
                date={el.date}
                removeHandler={removeHandler}
              />
            );
          })}
          <div className="heading-container">
            <h3>Danh sách Timesheet</h3>
            <button className="timesheet-button">Khai báo timesheet</button>
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
                </tr>
              </tbody>
            </table>
          </div>
          <div className="task-detail__footer">
            <button>Hủy</button>
            <button
              disabled={!formik.isValid}
              type="submit"
              className="task-detail__footer__save-btn"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TaskDetails;
