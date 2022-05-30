import React from "react";
import LoadingRing from "./LoadingRing/LoadingRing";
import TaskDetails from "./TaskDetails";
import TimeSheet from "./TimeSheet";
import ProgressBar from "./ProgressBar/ProgressBar";
import Tooltips from "./Tooltips/index";
import Density from "./DensityDisplay/Density";
import DensityCluster from "./DensityDisplay/DensityCluster";

const Modal = () => {
  return (
    <div className="modal">
      <Tooltips
        children={
          <ProgressBar
            width={"200px"}
            percent={71}
            denominator={80}
            numerator={20}
          />
        }
        content={"70.111 %"}
      />
      <DensityCluster type={"department"} numerator={89} denominator={20} />
      {/* <TaskDetails /> */}
      {/* <TimeSheet /> */}
      {/* <LoadingRing size={"md"} /> */}
    </div>
  );
};

export default Modal;
