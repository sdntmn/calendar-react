import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PopupEventAdd from "./PopupEventAdd";
import PopupOverview from "./PopupOverview";

const Cell = ({
  index,
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
  textPlaceholderForEventAdd,
}) => {
  const currentDay = dataRow.data === todayString;
  const indexTopLeft = [1, 2, 3, 8, 9, 10, 15, 16, 17];
  const indexTopRight = [4, 5, 6, 7, 11, 12, 13, 14, 18, 19, 20, 21];
  const indexBottomLeft = [22, 23, 24, 29, 30, 31, 36, 37, 38];
  const indexBottomRight = [25, 26, 27, 28, 32, 33, 34, 35, 39, 40, 41, 42];
  //console.log(index);
  const activeCellDate = dataRow.active;
  const [activeEvent, setActiveEvent] = useState(false);
  const [indexElement, setIndexElement] = useState();
  const [nameId, setNameId] = useState("");

  function handleClickInActive() {
    onCellActive(dataRow);
    getIndex(index);
  }

  function getIndex(val) {
    setIndexElement(val);
  }

  let sideLeftBottomScreen = indexBottomLeft.includes(indexElement);
  let sideLeftTopScreen = indexTopLeft.includes(indexElement);
  let sideRightTopScreen = indexTopRight.includes(indexElement);
  let sideRightBottomScreen = indexBottomRight.includes(indexElement);
  let overviewBottomLeft = "overviewBottomLeft";
  let overviewTopLeft = "overviewTopLeft";
  let overviewTopRight = "overviewTopRight";
  let overviewBottomRight = "overviewBottomRight";

  useEffect(() => {
    if (sideLeftBottomScreen) {
      setNameId(overviewBottomLeft);
    }
    if (sideLeftTopScreen) {
      setNameId(overviewTopLeft);
    }
    if (sideRightTopScreen) {
      setNameId(overviewTopRight);
    }
    if (sideRightBottomScreen) {
      setNameId(overviewBottomRight);
    }
  }, [
    overviewBottomLeft,
    overviewBottomRight,
    overviewTopLeft,
    overviewTopRight,
    sideLeftBottomScreen,
    sideLeftTopScreen,
    sideRightBottomScreen,
    sideRightTopScreen,
  ]);

  useEffect(() => {
    const activeEventCell = () => {
      if (dataRow.title !== "") {
        setActiveEvent(true);
      }
    };
    activeEventCell();
  }, [dataRow.title]);

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

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
                nameId={nameId}
                onClose={onClose}
                isOpen={isOpenEventAdd}
                textPlaceholderForEventAdd={textPlaceholderForEventAdd}
                saveResultQuickAdd={saveResultQuickAdd}
                dataForEventAdd={dataForEventAdd}
                setIsSaveEvent={setIsSaveEvent}
                isSaveEvent={isSaveEvent}
              />
              <PopupOverview
                nameId={nameId}
                onClose={onClose}
                isOpen={isOpenOverview}
                activeCell={activeCell}
                setIsSaveEvent={setIsSaveEvent}
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
              nameId={nameId}
              onClose={onClose}
              isOpen={isOpenEventAdd}
              textPlaceholderForEventAdd={textPlaceholderForEventAdd}
              saveResultQuickAdd={saveResultQuickAdd}
              dataForEventAdd={dataForEventAdd}
              setIsSaveEvent={setIsSaveEvent}
              isSaveEvent={isSaveEvent}
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
