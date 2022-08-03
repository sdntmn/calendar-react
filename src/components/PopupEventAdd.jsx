import { React } from "react";
import Popup from "./Popup";
import InputPopup from "./InputPopup";

import TextAreaInPopup from "./TextAreaInPopup";
import Button from "./Button";

const PopupEventAdd = function ({ isOpen, onClose }) {
  const doingsInput = (
    <InputPopup placeholder='Событие' type='text' name='name' />
  );
  const dateOfDoingsInput = (
    <InputPopup placeholder='День, месяц, год' type='text' name='link' />
  );

  const namesParticipantsInput = (
    <InputPopup placeholder='Имена участников' type='text' name='link' />
  );

  const textAreaInput = (
    <TextAreaInPopup placeholder='Описание' type='text' name='description' />
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
      type='submit'
      title='Удалить'></Button>
  );

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      name='event-add'
      idPopup='event-add'>
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
