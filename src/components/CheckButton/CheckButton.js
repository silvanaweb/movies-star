import React from "react";
import "./CheckButton.css";

// check button is used for the genre filtering
export const CheckButton = ({
  checked,
  name,
  onChange,
  title,
  className = ""
}) => {
  const onHandleChange = e => {
    e.stopPropagation();
    onChange({ name, checked: !checked });
  };
  const ButtonCheckedClass = checked ? "CheckButton--checked" : "";
  return (
    <button
      className={`CheckButton ${ButtonCheckedClass} ${className}`}
      onClick={onHandleChange}
    >
      {title}
    </button>
  );
};
