import React from "react";
import MyButton from "./UI/button/MyButton";
import MySelect from "./UI/select/MySelect";

const MainButton = ({ setIsModal, filterFunc }) => {
  return (
    <div className="btn-wrapper">
      <div className="btn-container">
        <MyButton onClick={() => setIsModal(true)}>Add Task</MyButton>
        <MySelect filterFunc={filterFunc}/>
      </div>
    </div>
  );
};

export default MainButton;
