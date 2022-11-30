import React from "react";

export const Button = (props) => {
  const { title, classButton, handleShow } = props;
  return (
    <button className={classButton} onClick={handleShow}>
      {title}
    </button>
  );
};
