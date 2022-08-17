import { React } from "react";

const InputPopup = function ({
  name,
  type,
  value,
  onClick,
  onChange,
  className,
  placeholder,
}) {
  return (
    <>
      <input
        name={name}
        type={type}
        value={value}
        onClick={onClick}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        autocomplete='off'
      />
    </>
  );
};

export default InputPopup;
