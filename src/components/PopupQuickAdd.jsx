import { React } from "react";
import Popup from "./Popup";
import InputPopup from "./InputPopup";

import Button from "./Button";

const PopupQuickAdd = function ({ isOpenQuickAdd, onClose, onEventAdd }) {
  const dateCreateEventInput = (
    <InputPopup
      placeholder='День, месяц, год'
      type='date'
      name='create-event'
    />
  );

  const btnCreate = (
    <Button
      className='controlMonth__extra-button popupEventAdd_controlMonth'
      type='text'
      title='Создать'
      onEvent={onEventAdd}></Button>
  );

  return (
    <Popup
      isOpen={isOpenQuickAdd}
      onClose={onClose}
      name='quick-add'
      idPopup='quick-add'>
      {dateCreateEventInput}

      <div className='popupEventAdd'>{btnCreate}</div>
    </Popup>
  );
};

export default PopupQuickAdd;
