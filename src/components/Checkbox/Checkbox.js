import React from "react";
import "./Checkbox.css";

export const Checkbox = ({ checked, name, onChange, title }) => {
  return (
    <label className="Checkbox__container">
      {title}
      <input
        name={name}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <span className="Checkbox__checkmark" />
    </label>
  );
};
