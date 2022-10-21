import React from "react";

export const Button = (props) => {
  return (
    <>
      <button
        type={props.type}
        onClick={props.onClick}
        className={`outline-none flex justify-center items-center rounded-md shadow-sm ${props.className}`}
      >
        {props.children}
      </button>
    </>
  );
};
