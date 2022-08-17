import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PopupEventAdd from "./PopupEventAdd";
import PopupOverview from "./PopupOverview";
import {
  indexCellTopLeft,
  indexCellTopRight,
  indexCellBottomLeft,
  indexCellBottomRight,
} from "../data/arrayIndexCell.js";

import {
  OVERVIEW_BOTTOM_LEFT,
  OVERVIEW_TOP_LEFT,
  OVERVIEW_TOP_RIGHT,
  OVERVIEW_BOTTOM_RIGHT,
} from "../utils/config.js";

const Cell = ({
  index,
  array,
  dataRow,
  onClose,
  activeCell,
  todayString,
  isSaveEvent,
  onCellActive,
  isOpenEventAdd,
  isOpenOverview,
  setIsSaveEvent,
  dataForEventAdd,
  saveResultQuickAdd,
  setArrayCellForName,
  textPlaceholderForEventAdd,
}) => {
  const currentDay = dataRow.data === todayString;

  const activeCellDate = dataRow.active;
  const [activeEvent, setActiveEvent] = useState(false);
  const [indexElement, setIndexElement] = useState();
  const [nameId, setNameId] = useState("");
  const [isHover, setIsHover] = useState(false);

  // =========================================================================
  function handleClickInActive() {
    onCellActive(dataRow);
    getIndex(index);
  }

  // =========================================================================
  function getIndex(val) {
    setIndexElement(val);
  }

  // =========================================================================
  let sideLeftBottomScreen = indexCellBottomLeft.includes(indexElement);
  let sideLeftTopScreen = indexCellTopLeft.includes(indexElement);
  let sideRightTopScreen = indexCellTopRight.includes(indexElement);
  let sideRightBottomScreen = indexCellBottomRight.includes(indexElement);

  useEffect(() => {
    if (sideLeftBottomScreen) {
      setNameId(OVERVIEW_BOTTOM_LEFT);
    }
    if (sideLeftTopScreen) {
      setNameId(OVERVIEW_TOP_LEFT);
    }
    if (sideRightTopScreen) {
      setNameId(OVERVIEW_TOP_RIGHT);
    }
    if (sideRightBottomScreen) {
      setNameId(OVERVIEW_BOTTOM_RIGHT);
    }
  }, [
    sideLeftBottomScreen,
    sideLeftTopScreen,
    sideRightBottomScreen,
    sideRightTopScreen,
  ]);
  // =========================================================================
  useEffect(() => {
    const activeEventCell = () => {
      if (dataRow.title !== "") {
        setActiveEvent(true);
      }
    };
    activeEventCell();
  }, [dataRow.title]);

  // =========================================================================
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  // =========================================================================
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  // =========================================================================
  const boxStyle = {
    background: isHover && activeEvent ? "#27A1FF" : "",
  };

  const boxStyleSecond = {
    background: isHover && !activeEvent ? "#F4F4F4" : "",
  };

  return (
    <>
      {activeEvent ? (
        <div
          className={`cell  ${activeCellDate && "cell__active"} ${
            activeEvent && "cell_background"
          }`}
          style={boxStyle}
          onClick={handleClickInActive}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {activeCellDate ? (
            <>
              <PopupEventAdd
                array={array}
                nameId={nameId}
                onClose={onClose}
                isOpen={isOpenEventAdd}
                textPlaceholderForEventAdd={textPlaceholderForEventAdd}
                saveResultQuickAdd={saveResultQuickAdd}
                dataForEventAdd={dataForEventAdd}
                setIsSaveEvent={setIsSaveEvent}
                isSaveEvent={isSaveEvent}
                setArrayCellForName={setArrayCellForName}
              />
              <PopupOverview
                array={array}
                nameId={nameId}
                onClose={onClose}
                isOpen={isOpenOverview}
                activeCell={activeCell}
                isSaveEvent={isSaveEvent}
                setIsSaveEvent={setIsSaveEvent}
                setArrayCellForName={setArrayCellForName}
                setActiveEvent={setActiveEvent}
                setIsHover={setIsHover}
              />
            </>
          ) : (
            ""
          )}

          <div className='cell__wrap'>
            <span
              className={`cell__heading ${
                currentDay && "cell__heading-actual"
              }`}>
              {dataRow.name}{" "}
            </span>
            <span className='cell__heading cell__title'>{dataRow.title}</span>
            <span className='cell__heading cell__title'>
              {dataRow.participants}
            </span>
            <span className='cell__heading'>{dataRow.description}</span>
          </div>
        </div>
      ) : (
        <div
          className={`cell  ${activeCellDate && "cell__active"} ${
            activeEvent && "cell_background"
          }`}
          style={boxStyleSecond}
          onClick={handleClickInActive}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {activeCellDate ? (
            <PopupEventAdd
              array={array}
              nameId={nameId}
              onClose={onClose}
              isOpen={isOpenEventAdd}
              textPlaceholderForEventAdd={textPlaceholderForEventAdd}
              saveResultQuickAdd={saveResultQuickAdd}
              dataForEventAdd={dataForEventAdd}
              setIsSaveEvent={setIsSaveEvent}
              isSaveEvent={isSaveEvent}
              setArrayCellForName={setArrayCellForName}
            />
          ) : (
            ""
          )}

          <div className='cell__wrap'>
            <span
              className={`cell__heading ${
                currentDay && "cell__heading-actual"
              }`}>
              {dataRow.name}{" "}
            </span>
            <span className='cell__heading cell__title'>{dataRow.title}</span>
            <span className='cell__heading cell__title'>
              {dataRow.participants}
            </span>
            <span className='cell__heading'>{dataRow.description}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Cell;
