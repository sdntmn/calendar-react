import { React } from "react";

const Popup = function ({ isPopupOpen = true, children, idPopup }) {
  return (
    <div className={`popup ${isPopupOpen && "popup__is-opened"}`} id={idPopup}>
      <div>
        <form name='popup__form' className='popup__container'>
          <button
            className='popup__close'
            type='button'
            aria-label='Кнопка закрытия формы'></button>
          {children}
        </form>
      </div>
    </div>
  );
};

export default Popup;
