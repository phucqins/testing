import React, { useState } from "react";
import DatePicker from "react-datepicker";
import calendarIcon from "../assets/svg/Calendar.svg";
import IconDelete from "../icons/IconDelete";

const TimeSheet = () => {
  const [date, setDate] = useState(null);

  return (
    <div className="modal">
      <div className="timesheet__modal">
        <div className="task-detail__title">
          <h2>Khai báo timesheet</h2>
          <button>x</button>
        </div>
        <div className="task-detail__container">
          <p className="task-detail__label">
            Nhiệm vụ: Lập đề xuất và lựa chọn mặt bằng
          </p>
          <div className="timesheet__modal__table">
            <table>
              <thead>
                <tr>
                  <th className="timesheet__modal__table__date">
                    Ngày thực hiện
                  </th>
                  <th className="timesheet__modal__table__time-count">
                    Số lần đã TH
                  </th>
                  <th className="timesheet__modal__table__time-total">
                    Tổng thời gian HTTT
                  </th>
                  <th className="timesheet__modal__table__note">Ghi chú</th>
                  <th className="timesheet__modal__table__control">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
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
                  </td>
                  <td className="table-padding">
                    <input
                      className="timesheet__modal__table__input center"
                      type="text"
                      placeholder="1"
                      disabled="true"
                    />
                  </td>
                  <td className="table-padding">
                    <input
                      className="timesheet__modal__table__input center"
                      type="text"
                      value="1"
                      disabled="true"
                    />
                  </td>{" "}
                  <td className="table-padding">
                    <input
                      className="timesheet__modal__table__input "
                      type="text"
                      value="1"
                      disabled="true"
                    />
                  </td>{" "}
                  <td className="table-padding">
                    <input
                      className="timesheet__modal__table__input"
                      type="text"
                      value="-"
                      disabled="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
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
                  </td>
                  <td>
                    <input
                      className="timesheet__modal__table__input center"
                      type="text"
                      placeholder="1"
                      disabled="true"
                    />
                  </td>
                  <td>
                    <input
                      className="timesheet__modal__table__input center"
                      type="text"
                      value="1"
                      disabled="true"
                    />
                  </td>{" "}
                  <td>
                    <input
                      className="timesheet__modal__table__input "
                      type="text"
                      value="1"
                      disabled="true"
                    />
                  </td>{" "}
                  <td>
                    <input
                      className="timesheet__modal__table__input"
                      type="text"
                      value="-"
                      disabled="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
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
                  </td>
                  <td>
                    <input
                      className="timesheet__modal__table__input center"
                      type="text"
                      placeholder="1"
                      disabled="true"
                    />
                  </td>
                  <td>
                    <input
                      className="timesheet__modal__table__input center"
                      type="text"
                      value="1"
                      disabled="true"
                    />
                  </td>{" "}
                  <td>
                    <input
                      className="timesheet__modal__table__input "
                      type="text"
                      value="1"
                      disabled="true"
                    />
                  </td>{" "}
                  <td>
                    <input
                      className="timesheet__modal__table__input"
                      type="text"
                      value="-"
                      disabled="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="datepicker-container">
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        className="datepicker"
                        selected={new Date()}
                        onChange={(date) => setDate(date)}
                        placeholderText="-"
                      />
                      <span className="icon-container">
                        <img src={calendarIcon} className="icon" />
                      </span>
                    </div>
                  </td>
                  <td>
                    <input
                      className="timesheet__modal__table__input center"
                      type="text"
                      placeholder="1"
                      disabled="true"
                    />
                  </td>
                  <td>
                    <input
                      className="timesheet__modal__table__input center"
                      type="text"
                      value="1"
                      disabled="true"
                    />
                  </td>{" "}
                  <td>
                    <input
                      className="timesheet__modal__table__input "
                      type="text"
                      value="1"
                      disabled="true"
                    />
                  </td>{" "}
                  <td>
                    <input
                      className="timesheet__modal__table__input"
                      type="text"
                      value="-"
                      disabled="true"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSheet;
