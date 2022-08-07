import React from "react";
import ControlMonth from "./ControlMonth";

import Table from "./Table";

import PopupEventAdd from "./PopupEventAdd";
import PopupQuickAdd from "./PopupQuickAdd";

const Main = ({
  arrayCell,
  isOpenEventAdd,
  isOpenQuickAdd,
  onEventAdd,
  onClose,
  month,
  year,
  setDate,
  day,
}) => {
  return (
    <main className='main page__section'>
      <div className='main__section'>
        <ControlMonth month={month} year={year} setDate={setDate} day={day} />
        <Table arrayCell={arrayCell} />

        <PopupQuickAdd
          onClose={onClose}
          isOpenQuickAdd={isOpenQuickAdd}
          onEventAdd={onEventAdd}
        />
        <PopupEventAdd onClose={onClose} isOpenEventAdd={isOpenEventAdd} />
      </div>
    </main>
  );
};

export default Main;
