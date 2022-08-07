import { React } from "react";

const Button = function ({ className, type, title, children, onEvent }) {
  return (
    <>
      <button className={className} type={type} onClick={onEvent}>
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
