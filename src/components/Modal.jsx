import React from "react";
import TaskDetails from "./TaskDetails";
import TimeSheet from "./TimeSheet";

const Modal = () => {
  return (
    <div className="modal">
      <TaskDetails />
      <TimeSheet />
    </div>
  );
};

export default Modal;
