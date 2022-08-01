import React from "react";

const Header = () => {
  return (
    <header className='header page__section'>
      <div className='header__wrapper'>
        <div className='header__control'>
          <div className='header__control-buttons'>
            <button type='button' className='header__main-button'>
              Добавить
            </button>
            <button type='button' className='header__main-button'>
              Обновить
            </button>
          </div>

          <div className='header__input-area'>
            <div className='header__icon'></div>
            <input
              type='search'
              className='header__input'
              placeholder='Placeholder'
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
