import React, { useState, useCallback } from "react";

import Popup from "./Popup";
import InputPopup from "./InputPopup";
import Button from "./Button";

const PopupQuickAdd = function ({
  onClose,
  onEventAdd,
  isOpenQuickAdd,
  textForInputQuickAdd,
  setSaveResultQuickAdd,
}) {
  const [nameEvent, setNameEvent] = useState();
  const [buttonIsDisabledSave, setButtonIsDisabledSave] = useState(true);

  //======================================================================
  // Обработчик изменения инпута обновляет стейт
  const handlerInputEvent = (evt) => {
    setNameEvent(evt.target.value);
    if (!nameEvent) {
      setButtonIsDisabledSave(false);
    }
  };

  //======================================================================
  async function handleSubmitSave(evt) {
    evt.preventDefault();
    onEventAdd();
    setSaveResultQuickAdd(nameEvent);
    resetFrom();
  }

  //======================================================================
  const resetFrom = useCallback(() => {
    setNameEvent("");
  }, []);

  //======================================================================
  //компонент InputPopup
  const dateCreateEventInput = (
    <InputPopup
      type='text'
      name='quick-add'
      placeholder={textForInputQuickAdd}
      onChange={handlerInputEvent}
      value={nameEvent}
      className='inputPopup'
      required
    />
  );

  //======================================================================
  //компонент Button
  const btnCreate = (
    <Button
      className='controlMonth__extra-button popupEventAdd_controlMonth'
      type='submit'
      title='Создать'
      disabled={buttonIsDisabledSave}
      onClick={handleSubmitSave}></Button>
  );

  return (
    <Popup
      isOpen={isOpenQuickAdd}
      onClose={onClose}
      name='quick-add'
      idPopup='quick-add'
      onSubmit={handleSubmitSave}>
      {dateCreateEventInput}

      <div className='popupEventAdd'>{btnCreate}</div>
    </Popup>
  );
};

export default PopupQuickAdd;
