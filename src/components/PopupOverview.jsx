import React, { useState } from "react";
import Popup from "./Popup";
import TextAreaInPopup from "./TextAreaInPopup";
import Button from "./Button";

const PopupOverview = function ({
  array,
  isOpen,
  nameId,
  onClose,
  activeCell,
  setIsHover,
  isSaveEvent,
  setIsSaveEvent,
  setActiveEvent,
  setArrayCellForName,
}) {
  const [values, setValues] = useState({});

  //========================================================================
  async function handleSubmitSave(evt) {
    evt.preventDefault();
    const result = {
      id: activeCell.id,
      description: values.description || "",
    };
    changeEvent(result);
    onClose();
  }

  //========================================================================
  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const nameInput = input.name;
    setValues({ ...values, [nameInput]: value });
  };

  //========================================================================
  // Смена данных в списке ячеек и LocalStorage
  function changeEvent(val) {
    setIsSaveEvent(
      isSaveEvent.map((el) => {
        if (el.id === val.id) {
          return (el = { ...el, description: val.description });
        } else {
          return el;
        }
      })
    );
    setArrayCellForName(
      array.map((el) => {
        if (el.data === val.data) {
          return (el = {
            ...el,

            description: val.description,
          });
        } else {
          return el;
        }
      })
    );
  }

  //========================================================================
  function deleteDataCell(evt) {
    evt.preventDefault();
    setIsSaveEvent((state) => state.filter((c) => c.id !== activeCell.id));
    setArrayCellForName(
      array.map((el) => {
        if (el.id === activeCell.id) {
          return (el = {
            ...el,
            active: false,
            description: "",
            title: "",
            participants: "",
          });
        } else {
          return el;
        }
      })
    );
    setActiveEvent(false);
    setIsHover(false);
    onClose();
  }

  //========================================================================
  //компонент TextAreaInPopup
  const textAreaInput = (
    <TextAreaInPopup
      placeholder={activeCell.description || "Описание"}
      id='description'
      name='description'
      value={values.description || ""}
      onChange={handleChange}
    />
  );

  //========================================================================
  //компонент Button
  const btnReady = (
    <Button
      className='controlMonth__extra-button popupEventAdd_controlMonth'
      type='submit'
      title='Готово'></Button>
  );

  //========================================================================
  //компонент Button
  const btnDelete = (
    <Button
      className='controlMonth__extra-button popupEventAdd_controlMonth'
      type='button'
      onClick={deleteDataCell}
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
