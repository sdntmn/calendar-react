import { React } from "react";

const TextAreaInPopup = function () {
  return (
    <>
      <textarea
        className='textareaPopup'
        required
        placeholder='Описание'
        type='text'
        name='link'></textarea>
    </>
  );
};

export default TextAreaInPopup;
