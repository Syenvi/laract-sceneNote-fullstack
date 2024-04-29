import clsx from "clsx";
import React from "react";

const Input = (props) => {
  const { label, register, error, touchedField, type } = props;
  return (
    <>
      <label>{label}</label>
      <input
        placeholder={label}
        className={clsx(
          "bg-secondary rounded-lg p-4 outline-none ",
          error && "border-red-500 border-2"
        )}
        type={type}
        {...register}
      />
      {touchedField && error && (
        <small className="text-red-500 ">{error}</small>
      )}
    </>
  );
};

export default Input;
