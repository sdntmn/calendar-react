import React, { useState, useEffect } from "react";
import PopupQuickAdd from "./PopupQuickAdd";
import Search from "./Search";

const Header = ({
  onClose,
  setDate,
  onQuickAdd,
  activeCell,
  onEventAdd,
  isSaveEvent,
  isOpenQuickAdd,
  isOpenEventAdd,
  onOpenOverview,
  setSaveResultQuickAdd,
  textForInputQuickAdd,
}) => {
  const [isButtonAdd, setIsButtonAdd] = useState(true);
  const [isButtonUpdate, setIsButtonUpdate] = useState(true);
  // =========================================================================
  useEffect(() => {
    let buttonAdd;
    let buttonUpdate;
    const activeCellBoolean = () => {
      if (Object.keys(activeCell).length === 0 || activeCell.active === false) {
        buttonAdd = true;
        buttonUpdate = true;
        return [buttonAdd, buttonUpdate];
      }
      if (
        activeCell.active !== undefined &&
        activeCell.active === true &&
        activeCell.title === "" &&
        !isOpenEventAdd &&
        !isOpenQuickAdd
      ) {
        buttonAdd = false;
        buttonUpdate = true;
        return [buttonAdd, buttonUpdate];
      }
      if (
        activeCell.active !== undefined &&
        activeCell.active === true &&
        activeCell.title !== "" &&
        !isOpenQuickAdd &&
        !isOpenEventAdd
      ) {
        buttonAdd = false;
        buttonUpdate = false;
        return [buttonAdd, buttonUpdate];
      }
    };

    activeCellBoolean();
    setIsButtonAdd(buttonAdd);
    setIsButtonUpdate(buttonUpdate);
  }, [activeCell, isOpenEventAdd, isOpenQuickAdd]);

  return (
    <>
      <header className='header page__section'>
        <div className='header__wrapper'>
          <PopupQuickAdd
            onClose={onClose}
            onEventAdd={onEventAdd}
            activeCell={activeCell}
            isOpenQuickAdd={isOpenQuickAdd}
            setSaveResultQuickAdd={setSaveResultQuickAdd}
            textForInputQuickAdd={textForInputQuickAdd}
          />
          <div className='header__control-buttons'>
            <button
              type='button'
              className='header__main-button'
              onClick={onQuickAdd}
              disabled={isButtonAdd}>
              Добавить
            </button>

            <button
              type='button'
              className='header__main-button'
              onClick={onOpenOverview}
              disabled={isButtonUpdate}>
              Обновить
            </button>
          </div>
          <div className='header__input-area'>
            <div className='header__icon'></div>
            <Search isSaveEvent={isSaveEvent} setDate={setDate} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
