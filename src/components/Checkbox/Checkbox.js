import React from "react";
import "./Checkbox.css";

// at first i used a checkbox for the genres filtering, but i have finally opted for a check button
// because it takes less space (and in this case is more elegant)
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
