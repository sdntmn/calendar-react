import React from "react";
import Cell from "./Cell";
import { AMOUNT_CELL, EXTRA_STEP } from "../utils/config.js";

const Table = ({
  onClose,
  arrayCell,
  activeCell,
  isSaveEvent,
  todayString,
  onCellActive,
  isOpenOverview,
  setIsSaveEvent,
  isOpenEventAdd,
  dataForEventAdd,
  saveResultQuickAdd,
  setArrayCellForName,
  textPlaceholderForEventAdd,
}) => {
  return (
    <>
      <section className='table page__section'>
        {arrayCell.length === AMOUNT_CELL &&
          arrayCell.map((item, index, array) => (
            <Cell
              key={item.id}
              dataRow={item}
              onClose={onClose}
              index={index + EXTRA_STEP}
              array={array}
              activeCell={activeCell}
              todayString={todayString}
              isOpenEventAdd={isOpenEventAdd}
              onCellActive={onCellActive}
              textPlaceholderForEventAdd={textPlaceholderForEventAdd}
              saveResultQuickAdd={saveResultQuickAdd}
              dataForEventAdd={dataForEventAdd}
              setIsSaveEvent={setIsSaveEvent}
              isSaveEvent={isSaveEvent}
              isOpenOverview={isOpenOverview}
              setArrayCellForName={setArrayCellForName}></Cell>
          ))}
      </section>
    </>
  );
};

export default Table;
