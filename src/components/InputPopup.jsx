import { React } from "react";

const InputPopup = function ({ placeholder, name, type }) {
  return (
    <>
      <input
        className='inputPopup'
        required
        placeholder={placeholder}
        name={name}
        type={type}
      />
    </>
  );
};

export default InputPopup;
