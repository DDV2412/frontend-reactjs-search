import React from "react";

export const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        checked={props.checked}
        className={`px-4 py-3.5 border-2 border-slate-200 rounded-md shadow-sm outline-none ${props.className}`}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </>
  );
};
