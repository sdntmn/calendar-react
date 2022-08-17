import { React } from "react";

const TextAreaInPopup = function ({ name, value, onChange, placeholder }) {
  return (
    <>
      <textarea
        className='textareaPopup'
        type='textarea'
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}></textarea>
    </>
  );
};

export default TextAreaInPopup;
