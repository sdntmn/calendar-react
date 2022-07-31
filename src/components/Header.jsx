import React from "react";

const Header = () => {
  return (
    <header className='header page__section'>
      <div class='header__wrapper'>
        <div class='header__control'>
          <div class='header__control-buttons'>
            <button type='button' class='header__main-button'>
              Добавить
            </button>
            <button type='button' class='header__main-button'>
              Обновить
            </button>
          </div>

          <div class='header__input-area'>
            <div class='header__icon'></div>
            <input
              type='text'
              class='header__input'
              placeholder='Placeholder'
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
