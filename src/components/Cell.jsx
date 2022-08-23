import React, { useEffect, useState } from "react";
import {
  indexCellBottomLeft,
  indexCellBottomRight,
  indexCellTopLeft,
  indexCellTopRight,
} from "../data/arrayIndexCell.js";
import PopupEventAdd from "./PopupEventAdd";
import PopupOverview from "./PopupOverview";

import {
  OVERVIEW_BOTTOM_LEFT,
  OVERVIEW_BOTTOM_RIGHT,
  OVERVIEW_TOP_LEFT,
  OVERVIEW_TOP_RIGHT,
} from "../utils/config.js";

const Cell2 = ({ dataRow, props }) => {
  console.log(props.isOpen);
  console.log(props);
  const currentDay = dataRow.data === props.todayString;

  const activeCellDate = dataRow?.active;
  const [activeEvent, setActiveEvent] = useState(false);
  const [indexElement, setIndexElement] = useState();
  const [nameId, setNameId] = useState("");
  const [isHover, setIsHover] = useState(false);

  // =========================================================================
  function handleClickInActive() {
    var val = dataRow.id;
    var index = props.arrayCell?.findIndex(function (item, i) {
      return item.id === val;
    });

    props.onCellActive(dataRow);
    getIndex(index);
  }

  // =========================================================================
  function getIndex(val) {
    setIndexElement(val);
  }

  // // =========================================================================
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
              <PopupEventAdd nameId={nameId} props={props} />
              <PopupOverview nameId={nameId} props={props} />
            </>
          ) : (
            ""
          )}

          <span
            className={`cell__heading ${currentDay && "cell__heading-actual"}`}>
            {dataRow.name}{" "}
          </span>
          <span className='cell__heading cell__title'>{dataRow.title}</span>

          <span className='cell__description'>{dataRow.description}</span>
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
            <PopupEventAdd nameId={nameId} props={props} />
          ) : (
            ""
          )}

          <span
            className={`cell__heading ${currentDay && "cell__heading-actual"}`}>
            {dataRow.name}{" "}
          </span>
          <span className='cell__heading cell__title'>{dataRow.title}</span>

          <span className='cell__description'>{dataRow.description}</span>
        </div>
      )}
    </>
  );
};

export default Cell2;
