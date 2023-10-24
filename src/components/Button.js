import React from "react";

let Button = ({ title, onBtnClick }) => {
  let handleClick = (event) => {
    onBtnClick(event);
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
