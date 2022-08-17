import React, { useState } from "react";
import Popup from "./Popup";
//import { useCurrentWidth, useCurrentHeight } from "../hooks/useCurrentWidth.js";
import TextAreaInPopup from "./TextAreaInPopup";
import Button from "./Button";

const PopupOverview = function ({
  isOpen,
  onClose,
  activeCell,

  setIsSaveEvent,
  isSaveEvent,
  nameId,
}) {
  const [values, setValues] = useState({});
  const [resultEvent, setResultEvent] = useState({});

  async function handleSubmitSave(evt) {
    evt.preventDefault();
    const result = {
      description: values.description || "",
    };

    setResultEvent(result);
    addEvent(result);
    onClose();
  }

  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const nameInput = input.name;
    setValues({ ...values, [nameInput]: value });
  };

  function addEvent(val) {
    // return setIsSaveEvent([...activeCell, val]);
  }

  function resetData() {
    setValues({});
    onClose();
    return true;
  }

  const textAreaInput = (
    <TextAreaInPopup
      placeholder='Описание'
      id='description'
      name='description'
      value={values.description || ""}
      onChange={handleChange}
    />
  );

  const btnReady = (
    <Button
      className='controlMonth__extra-button popupEventAdd_controlMonth'
      type='submit'
      title='Готово'></Button>
  );

  const btnDelete = (
    <Button
      className='controlMonth__extra-button popupEventAdd_controlMonth'
      type='reset'
      value={resultEvent}
      onClick={resetData}
      title='Удалить'></Button>
  );

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitSave}
      name='overview'
      idPopup={nameId}>
      <div className='popup-content'>
        <h2 className='popup-content__title'>{activeCell.title}</h2>
        <span className='popup-content__date'>{activeCell.data}</span>
        <span className='popup-content__input-text'>
          Участники:
          <br></br>
          <span className='popup-content__button-title'>
            {activeCell.participants}
          </span>
        </span>
      </div>

      {textAreaInput}
      <div className='popupEventAdd'>
        {btnReady}
        {btnDelete}
      </div>
    </Popup>
  );
};

export default PopupOverview;
