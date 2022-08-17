import { React } from "react";

const InputPopup = function ({
  placeholder,
  name,
  type,
  onChange,
  value,
  className,
  onClick,
}) {
  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onClick={onClick}
        autocomplete='off'
      />
    </>
  );
};

export default InputPopup;
//  'inputPopup'
