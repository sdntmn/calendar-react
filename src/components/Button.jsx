import { React } from "react";

const Button = function ({ className, type, title, children }) {
  return (
    <>
      <button className={className} type={type}>
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
