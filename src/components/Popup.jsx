import { React, useEffect } from "react";
import { ReactComponent as ClosePopup } from "./images/icons_cross-large.svg.svg";

// const setActive = ({ isActive }) =>
//   isActive ? "popup__link-activ" : "popup__link";

const Popup = function ({ isPopupOpen = false, children, togglePopup }) {
  const handlePopup = () => {
    togglePopup(!isPopupOpen);
  };

  return (
    <div className={`popup ${isPopupOpen && "popup__is-opened"}`}>
      <div class='popup' id='popup_form_add'>
        <div class='popup__container'>
          <form name='popup__form'>
            <button
              class='popup__close'
              type='button'
              aria-label='Кнопка закрытия формы'></button>

            <input
              class='popup__input popup__input_value_mesto'
              required
              placeholder='Событие'
              type='text'
              name='name'
              value=''
            />
            <input
              class='popup__input popup__input_value_link'
              required
              placeholder='День, месяц, год'
              type='text'
              name='link'
              value=''
            />
            <input
              class='popup__input popup__input_value_link'
              required
              placeholder='Имена участников'
              type='text'
              name='link'
              value=''
            />
            <textarea
              class='popup__input-textarea popup__input_value_link'
              required
              placeholder='Описание'
              type='text'
              name='link'
              value=''></textarea>

            <button
              class='controlMonth__extra-button popup_controlMonth'
              type='button'>
              <span class='controlMonth__button-title popup_controlMonth'>
                Готово
              </span>
            </button>

            <button class='controlMonth__extra-button' type='button'>
              <span class='controlMonth__button-title'>Удалить</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
