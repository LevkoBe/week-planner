import React from "react";

const Button = ({ title, onBtnClick }) => {
  const handleClick = (event) => {
    onBtnClick(event);
  };

  return (
    <button className={"btn btn-outline-primary btn-info"} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
