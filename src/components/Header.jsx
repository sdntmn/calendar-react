import React, { useState, useEffect } from "react";
import PopupQuickAdd from "./PopupQuickAdd";
import Search from "./Search";

const Header = ({
  onQuickAdd,
  activeCell,
  isOpenQuickAdd,
  onEventAdd,
  onClose,
  setSaveResultQuickAdd,
  textForInputQuickAdd,
  isSaveEvent,
  setDate,
  onOpenOverview,
}) => {
  const [activeCellBoolean, setActiveCellBoolean] = useState({});

  const activeEventCell = activeCell.title === "";

  useEffect(() => {
    const activeCellBoolean = () => {
      if (activeCell.active === undefined) {
        return false;
      } else {
        return true;
      }
    };
    setActiveCellBoolean(activeCellBoolean());
  }, [activeCell.active]);

  return (
    <>
      <header className='header page__section'>
        <div className='header__wrapper'>
          <div className='header__control'>
            <PopupQuickAdd
              onClose={onClose}
              isOpenQuickAdd={isOpenQuickAdd}
              onEventAdd={onEventAdd}
              activeCell={activeCell}
              setSaveResultQuickAdd={setSaveResultQuickAdd}
              textForInputQuickAdd={textForInputQuickAdd}
            />
            <div className='header__control-buttons'>
              <button
                type='button'
                className='header__main-button'
                onClick={onQuickAdd}
                disabled={!activeCellBoolean}>
                Добавить
              </button>

              <button
                type='button'
                className='header__main-button'
                onClick={onOpenOverview}
                disabled={activeEventCell}>
                Обновить
              </button>
            </div>

            <div className='header__input-area'>
              <div className='header__icon'></div>

              <Search isSaveEvent={isSaveEvent} setDate={setDate} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
