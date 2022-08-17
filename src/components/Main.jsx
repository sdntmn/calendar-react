import React from "react";
import ControlMonth from "./ControlMonth";

import Table from "./Table";

const Main = ({
  day,
  year,
  month,
  onClose,
  setDate,
  arrayCell,
  activeCell,
  activeEvent,
  isSaveEvent,
  todayString,
  onCellActive,
  isOpenEventAdd,
  isOpenOverview,
  setIsSaveEvent,
  setActiveEvent,
  dataForEventAdd,
  saveResultQuickAdd,
  textPlaceholderForEventAdd,
}) => {
  return (
    <main className='main page__section'>
      <div className='main__section'>
        <ControlMonth month={month} year={year} setDate={setDate} day={day} />
        <Table
          setDate={setDate}
          onClose={onClose}
          arrayCell={arrayCell}
          activeCell={activeCell}
          activeEvent={activeEvent}
          isSaveEvent={isSaveEvent}
          todayString={todayString}
          onCellActive={onCellActive}
          isOpenEventAdd={isOpenEventAdd}
          isOpenOverview={isOpenOverview}
          setIsSaveEvent={setIsSaveEvent}
          setActiveEvent={setActiveEvent}
          dataForEventAdd={dataForEventAdd}
          saveResultQuickAdd={saveResultQuickAdd}
          textPlaceholderForEventAdd={textPlaceholderForEventAdd}
        />
      </div>
    </main>
  );
};

export default Main;
