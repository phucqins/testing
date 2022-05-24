import React, { useState } from "react";
import DatePicker from "react-datepicker";
import calendarIcon from "../assets/svg/Calendar.svg";

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
                  <th>Ngày thực hiện</th>
                  <th>Số lần đã TH</th>
                  <th>Tổng thời gian HTTT</th>
                  <th>Ghi chú</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="timesheet__modal__table__date">
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
                  <td className="timesheet__modal__table__time-count">
                    <input type="text" placeholder="1" disabled="true" />
                  </td>
                </tr>
                <tr>
                  <td className="timesheet-table__date">12/01/2022</td>
                  <td className="timesheet-table__time">8h</td>
                </tr>{" "}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSheet;
