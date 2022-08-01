import { React } from "react";

const PopupEventAdd = function () {
  return (
    <>
      <input
        className='popup__input popup__input_value_mesto'
        required
        placeholder='Событие'
        type='text'
        name='name'
      />
      <input
        className='popup__input popup__input_value_link'
        required
        placeholder='День, месяц, год'
        type='text'
        name='link'
      />
      <input
        className='popup__input popup__input_value_link'
        required
        placeholder='Имена участников'
        type='text'
        name='link'
      />
      <textarea
        className='popup__input-textarea popup__input_value_link'
        required
        placeholder='Описание'
        type='text'
        name='link'></textarea>

      <button
        className='controlMonth__extra-button popup_controlMonth'
        type='button'>
        <span className='controlMonth__button-title popup_controlMonth'>
          Готово
        </span>
      </button>

      <button className='controlMonth__extra-button' type='button'>
        <span className='controlMonth__button-title'>Удалить</span>
      </button>
    </>
  );
};

export default PopupEventAdd;
