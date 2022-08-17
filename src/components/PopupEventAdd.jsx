import React, { useState } from "react";
import InputPopup from "./InputPopup";
import Popup from "./Popup";

import { MILLION } from "../utils/config.js";
import Button from "./Button";
import TextAreaInPopup from "./TextAreaInPopup";

const PopupEventAdd = function ({
  array,
  isOpen,
  nameId,
  onClose,
  isSaveEvent,
  setIsSaveEvent,
  dataForEventAdd,
  saveResultQuickAdd,
  setArrayCellForName,
  textPlaceholderForEventAdd,
}) {
  const [values, setValues] = useState({
    title: "",
    data: "",
    participants: "",
    description: "",
  });
  const [resultEvent, setResultEvent] = useState({});

  //==========================================================================
  async function handleSubmitSave(evt) {
    evt.preventDefault();
    const result = {
      id: Math.floor(Math.random() * MILLION),
      title: values.title || saveResultQuickAdd,
      data: dataForEventAdd,
      participants: values.participants || "",
      description: values.description || "",
    };

    setResultEvent(result);
    addEvent(result);
    onClose();
  }

  //==========================================================================
  const handleChange = (evt) => {
    const value = evt.target.value;
    const nameInput = evt.target.name;
    setValues({ ...values, [nameInput]: value });
  };

  //==========================================================================
  function addEvent(val) {
    setArrayCellForName(
      array.map((el) => {
        if (el.data === val.data) {
          return (el = {
            ...el,
            id: val.id,
            description: val.description,
            title: val.title,
            participants: val.participants,
          });
        } else {
          return el;
        }
      })
    );
    setIsSaveEvent([...isSaveEvent, val]);
  }

  //==========================================================================
  function resetData() {
    setValues({});
    onClose();
    return true;
  }

  //==========================================================================
  //компонент InputPopup
  const doingsInput = (
    <InputPopup
      placeholder='Событие'
      type='text'
      name='title'
      value={values.title || saveResultQuickAdd}
      onChange={handleChange}
      className='inputPopup'
    />
  );

  //==========================================================================
  //компонент InputPopup
  const dateOfDoingsInput = (
    <InputPopup
      placeholder={textPlaceholderForEventAdd}
      type='text'
      name='data'
      value={textPlaceholderForEventAdd}
      onChange={handleChange}
      className='inputPopup'
      disabled='true'
    />
  );

  //==========================================================================
  //компонент InputPopup
  const namesParticipantsInput = (
    <InputPopup
      placeholder='Имена участников'
      type='text'
      name='participants'
      value={values.participants}
      onChange={handleChange}
      className='inputPopup'
    />
  );

  //==========================================================================
  //компонент TextAreaInPopup
  const textAreaInput = (
    <TextAreaInPopup
      placeholder='Описание'
      id='description'
      name='description'
      value={values.description || ""}
      onChange={handleChange}
    />
  );

  //==========================================================================
  //компонент Button
  const btnReady = (
    <Button
      className='controlMonth__extra-button popupEventAdd_controlMonth'
      type='submit'
      title='Готово'></Button>
  );

  //==========================================================================
  //компонент Button
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
      name='event-add'
      idPopup={nameId}>
      {doingsInput}
      {dateOfDoingsInput}
      {namesParticipantsInput}
      {textAreaInput}
      <div className='popupEventAdd'>
        {btnReady}
        {btnDelete}
      </div>
    </Popup>
  );
};

export default PopupEventAdd;
