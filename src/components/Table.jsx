import React from "react";
import Cell from "./Cell";

const Table = ({
  arrayCell,
  activeCell,
  todayString,
  onClose,
  isOpenEventAdd,
  onCellActive,
  textPlaceholderForEventAdd,
  saveResultQuickAdd,
  dataForEventAdd,
  setIsSaveEvent,
  isSaveEvent,
  isOpenOverview,
}) => {
  return (
    <>
      <section className='table page__section'>
        {arrayCell.length === 42 &&
          arrayCell.map((item, index) => (
            <Cell
              key={item.id}
              dataRow={item}
              onClose={onClose}
              index={index + 1}
              activeCell={activeCell}
              todayString={todayString}
              isOpenEventAdd={isOpenEventAdd}
              onCellActive={onCellActive}
              textPlaceholderForEventAdd={textPlaceholderForEventAdd}
              saveResultQuickAdd={saveResultQuickAdd}
              dataForEventAdd={dataForEventAdd}
              setIsSaveEvent={setIsSaveEvent}
              isSaveEvent={isSaveEvent}
              isOpenOverview={isOpenOverview}></Cell>
          ))}
      </section>
    </>
  );
};

export default Table;
