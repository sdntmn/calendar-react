import { React } from "react";

const Button = function ({
  className,
  type,
  title,
  children,
  onClick,
  disabled = false,
}) {
  return (
    <>
      <button
        className={className}
        type={type}
        onClick={onClick}
        disabled={disabled}>
        {children ? (
          children
        ) : (
          <span className='controlMonth__button-title popup_controlMonth'>
            {title}
          </span>
        )}
      </button>
    </>
  );
};

export default Button;
