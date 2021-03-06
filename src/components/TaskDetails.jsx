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
        <h2>Chi ti???t nhi???m v???</h2>
        <button>x</button>
      </div>
      <div className="task-detail__content">
        <div className="task-detail__container">
          <h3>Th??ng tin KR</h3>
          <div className="task-detail__select">
            <p className="task-detail__label">Ch???n KR</p>
            <Select
              width={270}
              name="krName"
              options={colourOptions}
              defaultValue={{ value: 2131545, label: "Tang Chi Minh" }}
              onChange={formik.setFieldValue}
            />
          </div>
          <h3>Th??ng tin task</h3>
          <p className="task-detail__id">M??: OKG12233</p>
          <div className="task-detail__select-group">
            <div className="task-detail__select">
              <p className="task-detail__label">Ng?????i t???o</p>
              <Select
                width={374}
                name="createPerson"
                options={colourOptions}
                defaultValue={{ value: 2131545, label: "Tang Chi Minh" }}
                onChange={formik.setFieldValue}
              />
            </div>
            <div className="task-detail__select">
              <p className="task-detail__label">Ng?????i x??? l??</p>
              <Select
                width={374}
                options={colourOptions}
                defaultValue={{ value: 2131545, label: "Tang Chi Minh" }}
                name="handlePerson"
                onChange={formik.setFieldValue}
              />
            </div>
          </div>
          <p className="task-detail__strong">????nh gi??</p>
          <div className="task-detail__emotion-container">
            <IconNormal />
            <IconHappy />
            <IconSatisfied className="emotion-fixed" />
            <IconWow />
          </div>
          <p className="task-detail__label">
            T??n nhi???m v???
            <i className="aterisk"> *</i>
          </p>
          <input
            type="text"
            className="task-detail__input"
            onChange={formik.handleChange}
            name="taskName"
          />
          <p className="task-detail__label">
            Ng??y YC HT
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
            M?? t???
            <i className="aterisk"> *</i>
          </p>
          <input
            type="text"
            className="task-detail__input"
            onChange={formik.handleChange}
            name="description"
          />
          <p className="task-detail__label">
            K???t qu??? mong mu???n
            <i className="aterisk"> *</i>
          </p>
          <input
            type="text"
            className="task-detail__input"
            onChange={formik.handleChange}
            name="desiredResults"
          />

          <p className="task-detail__label">Tr???ng th??i</p>
          <Select
            width={270}
            options={colourOptions}
            defaultValue={{ value: 2131545, label: "Tang Chi Minh" }}
            name="status"
            onChange={formik.setFieldValue}
          />

          <div className="heading-container">
            <h3>Ng??y gia h???n</h3>
            <button type="button" onClick={handleAddExtension}>
              <IconPlus /> Th??m
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
            <h3>Danh s??ch Timesheet</h3>
            <button className="timesheet-button">Khai b??o timesheet</button>
          </div>
          <div className="timesheet-table">
            <table>
              <thead>
                <tr>
                  <th>Ng??y th???c hi???n</th>
                  <th>Th???i gian th???c hi???n</th>
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
            <button>H???y</button>
            <button
              disabled={!formik.isValid}
              type="submit"
              className="task-detail__footer__save-btn"
            >
              L??u
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TaskDetails;
