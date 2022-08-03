import { React } from "react";
import { ReactComponent as ClosePopup } from "../images/icons_cross-small.svg";

const Popup = function ({ isOpen = true, onClose, children, name, idPopup }) {
  return (
    <div
      className={`popup ${isOpen && "popup__is-opened"}`}
      name={name}
      id={idPopup}>
      <div className='popup__close-btn'>
        <button
          className='popup__close'
          type='button'
          aria-label='Кнопка закрытия формы'></button>
      </div>

      <form name='popup__form' className='popup__container'>
        {children}
      </form>
    </div>
  );
};

export default Popup;
