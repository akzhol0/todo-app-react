import React from "react";

const MainText = ({children}) => {
  return (
    <div className="text-wrapper">
      <h1 className="main-text">{children}</h1>
    </div>
  );
};

export default MainText;
