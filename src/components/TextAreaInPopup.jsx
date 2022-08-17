import { React } from "react";

const TextAreaInPopup = function ({ name, value, onChange }) {
  return (
    <>
      <textarea
        className='textareaPopup'
        placeholder='Описание'
        type='textarea'
        value={value}
        name={name}
        onChange={onChange}></textarea>
    </>
  );
};

export default TextAreaInPopup;
