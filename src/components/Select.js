import React from "react";

export const Select = (props) => {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      className={`border-2 border-slate-300 rounded-md shadow-sm px-4 py-3 outline-none ${props.className}`}
    >
      {props.children.map((option, i) => (
        <option key={i} value={option.props.value}>
          {option.props.children}
        </option>
      ))}
    </select>
  );
};
