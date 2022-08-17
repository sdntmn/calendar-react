import React, { useState, useEffect, useMemo } from "react";
import { TOTAL_CELL } from "./utils/config.js";
import { arrayInflectMonths } from "../src/data/arrayMonth.js";
import { arrayDayWeek } from "./data/arrayWeek.js";
import * as useMethod from "./utils/useMethod.js";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  let newDate = new Date();
  let currentDay;
  let currentMonth;
  let currentYear;

  currentDay = String(newDate.getDate()).padStart(2, "0");
  currentMonth = String(newDate.getMonth() + 1).padStart(2, "0");
  currentYear = newDate.getFullYear();

  const [todayString, setTodayString] = useState(
    `${currentYear}-${currentMonth}-${currentDay}`
  );

  useEffect(() => {
    setTodayString(`${currentYear}-${currentMonth}-${currentDay}`);
  }, [currentDay, currentMonth, currentYear]);
  let today = new Date(todayString);

  const [date, setDate] = useState(today);

  const [month, setMonth] = useState(date?.getMonth());
  const [year, setYear] = useState(date?.getFullYear());
  const [day, setDay] = useState(date?.getDate());

  const [arrayCell, setArrayCell] = useState([]);
  const [arrayCellForName, setArrayCellForName] = useState([]);
  const [activeCell, setActiveCell] = useState({});

  const [firstDaySelectedMount, setFirstDaySelectedMount] = useState(
    new Date(date?.getFullYear(), date?.getMonth(), 1)
  );

  const [prevMountFirstDay, setPrevMountFirstDay] = useState(
    new Date(date?.getFullYear(), date?.getMonth() - 1, 1)
  );

  const [nextMountFirstDay, setNextMountFirstDay] = useState(
    new Date(date?.getFullYear(), date?.getMonth() + 1, 1)
  );

  const [nextSecondFirstDay, setNextSecondFirstDay] = useState(
    new Date(date?.getFullYear(), date?.getMonth() + 2, 1)
  );

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setFirstDaySelectedMount(new Date(date.getFullYear(), date.getMonth(), 1));
    setPrevMountFirstDay(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    setNextMountFirstDay(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    setNextSecondFirstDay(new Date(date.getFullYear(), date.getMonth() + 2, 1));
  }, [date]);

  //========================================================
  // Получение начального дня недели выбранного месяца
  const [dayWeekStartMonth, setDayWeekStartMonth] = useState(date.getDay());
  useEffect(() => {
    if (date !== undefined) {
      const getDayWeekStartMonth = () => {
        let firstDayWeek = new Date(
          date.getFullYear(),
          date.getMonth(),
          1
        ).getDay();
        if (firstDayWeek === 0) {
          return (firstDayWeek = 6);
        }
        return firstDayWeek - 1;
      };
      setDayWeekStartMonth(getDayWeekStartMonth());
    }
  }, [date, dayWeekStartMonth]);

  //========================================================
  // Количество дней предыдущего месяца
  const amountDayPrevMount = Math.round(
    (firstDaySelectedMount - prevMountFirstDay) / 1000 / 3600 / 24
  );

  //========================================================
  // Количество дней текущего месяца
  const amountDaySelectedMount = Math.round(
    (nextMountFirstDay - firstDaySelectedMount) / 1000 / 3600 / 24
  );
  //========================================================
  // Количество дней следующего месяца
  const amountDayNextMount = Math.round(
    (nextSecondFirstDay - nextMountFirstDay) / 1000 / 3600 / 24
  );

  //========================================================
  // Получение массива текущего месяца

  const [arrDaySelectedMount, setArrDaySelectedMount] = useState([]);
  useEffect(() => {
    setArrDaySelectedMount(useMethod.arrDayMount(amountDaySelectedMount));
  }, [amountDaySelectedMount]);

  //========================================================
  //Преобразовываем в массив объектов массив текущего месяца
  const [arrObjDaySelectedMount, setArrObjDaySelectedMount] = useState();

  useEffect(() => {
    setArrObjDaySelectedMount(
      useMethod.customObj(arrDaySelectedMount, year, month)
    );
  }, [arrDaySelectedMount, month, year]);

  //========================================================
  // Получение массива предыдущего месяца
  const [arrDayPrevMount, setArrDayPrevMount] = useState([]);
  useEffect(() => {
    setArrDayPrevMount(useMethod.arrDayMount(amountDayPrevMount));
  }, [amountDayPrevMount]);

  //========================================================
  //Преобразовываем в массив объектов массив предыдущего месяца
  const [arrObjDayPrevMount, setArrObjDayPrevMount] = useState([]);
  useEffect(() => {
    if (arrDayPrevMount !== undefined) {
      setArrObjDayPrevMount(
        useMethod.customObj(arrDayPrevMount, year, month - 1)
      );
    }
  }, [arrDayPrevMount, month, year]);

  //========================================================
  // Получение массива следующего месяца
  const [arrDayNextMount, setArrDayNextMount] = useState([]);

  useEffect(() => {
    setArrDayNextMount(useMethod.arrDayMount(amountDayNextMount));
  }, [amountDayNextMount]);

  //========================================================
  //Преобразовываем в массив объектов массива следующего месяца
  const [arrObjDayNextMount, setArrObjDayNextMount] = useState([]);
  useEffect(() => {
    if (arrDayNextMount !== undefined) {
      setArrObjDayNextMount(
        useMethod.customObj(arrDayNextMount, year, month + 1)
      );
    }
  }, [arrDayNextMount, month, year]);

  //========================================================
  //Получить массив для свободных ячеек следующего месяца
  const [arrFreeCellNext, setArrFreeCellNext] = useState();
  useEffect(() => {
    if (
      amountDaySelectedMount !== undefined &&
      arrObjDayNextMount !== undefined &&
      arrDaySelectedMount !== undefined &&
      dayWeekStartMonth !== undefined
    ) {
      const arrDayMountForCell = () => {
        //Количество свободных ячеек
        const countFreeCell = TOTAL_CELL - amountDaySelectedMount;
        //Количество ячеек для следующего месяца
        let countFreeCellForStart = countFreeCell - dayWeekStartMonth;
        if (countFreeCellForStart !== undefined) {
          let arrayDayNext = arrObjDayNextMount.slice(0, countFreeCellForStart);
          return arrayDayNext;
        }
      };
      setArrFreeCellNext(arrDayMountForCell());
    }
  }, [
    amountDaySelectedMount,
    arrObjDayNextMount,
    arrDaySelectedMount,
    dayWeekStartMonth,
  ]);

  //========================================================
  // Получение массива ячеек предыдущего месяца
  const [arrFreeCellPrev, setArrFreeCellPrev] = useState([]);
  useEffect(() => {
    if (
      arrObjDayPrevMount !== undefined &&
      dayWeekStartMonth !== undefined &&
      amountDaySelectedMount !== undefined
    ) {
      const arrDayMountForCellPrev = () => {
        //Длина массива предыдущего месяца
        const lengthArrayPrevMount = arrObjDayPrevMount.length;

        //Количество ячеек для обрезки из предыдущего месяца
        let countCellForDelete = lengthArrayPrevMount - dayWeekStartMonth;

        let arrayDayPrev;
        if (dayWeekStartMonth === 0) {
          return (arrayDayPrev = []);
        } else {
          arrayDayPrev = arrObjDayPrevMount.slice(countCellForDelete);
          return arrayDayPrev;
        }
      };
      setArrFreeCellPrev(arrDayMountForCellPrev());
    }
  }, [amountDaySelectedMount, arrObjDayPrevMount, dayWeekStartMonth]);

  //========================================================
  // Слияние массивов
  useEffect(() => {
    const newLocal = undefined;
    if (
      arrObjDaySelectedMount !== newLocal &&
      arrFreeCellNext !== newLocal &&
      arrFreeCellPrev !== newLocal
    ) {
      setArrayCell([
        ...arrFreeCellPrev,
        ...arrObjDaySelectedMount,
        ...arrFreeCellNext,
      ]);
    }
  }, [arrObjDaySelectedMount, arrFreeCellNext, arrFreeCellPrev]);

  //=========================================================
  // Получение массива ячеек первого ряда
  const [arrayCellForOneRow, setArrayCellForOneRow] = useState([]);
  useEffect(() => {
    if (arrayCell !== undefined) {
      const getArrayCellForWeek = () => {
        //Длина массива дней недели
        const lengthWeek = arrayDayWeek.length;
        let arrayForWeek;
        if (!!arrayCell) {
          arrayForWeek = arrayCell.slice(0, lengthWeek);
          return arrayForWeek;
        }
      };
      setArrayCellForOneRow(getArrayCellForWeek());
    }
  }, [arrayCell]);
  //=========================================================
  // Получение массива со 2 по 6 ряд
  const [arrayCellNextRows, setCellNextRows] = useState([]);
  useEffect(() => {
    if (arrayCell !== undefined) {
      const getArrayCellNextRows = () => {
        //Длина массива дней недели
        const lengthWeek = arrayDayWeek.length;
        let nextRows;
        if (!!arrayCell) {
          nextRows = arrayCell.slice(lengthWeek);
          return nextRows;
        }
      };
      setCellNextRows(getArrayCellNextRows());
    }
  }, [arrayCell]);

  //========================================================
  //Получить массив первого ряда с днем недели
  const [arrayCombinedNameForCell, setArrayCombinedNameForCell] = useState();

  useEffect(() => {
    setArrayCombinedNameForCell(
      useMethod.getArrayCombinedName(arrayDayWeek, arrayCellForOneRow)
    );
  }, [arrayCellForOneRow]);

  //========================================================
  // Слияние массивов рядов
  useEffect(() => {
    const newLocal = undefined;
    if (
      arrayCombinedNameForCell !== newLocal &&
      arrayCellNextRows !== newLocal
    ) {
      setArrayCellForName([...arrayCombinedNameForCell, ...arrayCellNextRows]);
    }
  }, [arrayCellNextRows, arrayCombinedNameForCell]);

  //========================================================

  //Список events. Первоначальное получение данных из localStorage
  let saveEvent = JSON.parse(localStorage.getItem("saveEvent")) || [];

  const [isSaveEvent, setIsSaveEvent] = useState(saveEvent);
  const [lengthFavoriteId, setLengthFavoriteId] = useState(isSaveEvent?.length);

  console.log(lengthFavoriteId);
  console.log(isSaveEvent.length);
  console.log(arrayCellForName);
  // Список событий. Отслеживания изменений и сохранение данных в LocalStorage.
  useEffect(() => {
    localStorage.setItem("saveEvent", JSON.stringify(isSaveEvent));
  }, [isSaveEvent]);
  //========================================================

  useEffect(() => {
    if (lengthFavoriteId !== isSaveEvent.length) {
      setArrayCellForName(arrayCellForName);
    }
  }, [arrayCellForName, isSaveEvent.length, lengthFavoriteId]);
  console.log(arrayCellForName);
  // Для первоначальной загрузки и обработки данных из localStorage
  useEffect(() => {
    // const lengthFavoriteId = isSaveEvent?.length;

    if (lengthFavoriteId !== 0) {
      for (let i = 0; i < lengthFavoriteId; i++) {
        for (let elem of arrayCellForName) {
          if (elem?.data === isSaveEvent[i]?.data) {
            elem["id"] = isSaveEvent[i].id;
            elem["title"] = isSaveEvent[i].title;
            elem["participants"] = isSaveEvent[i].participants;
            elem["description"] = isSaveEvent[i].description;
            elem["active"] = false;
          }
        }
      }
    }
  }, [
    arrayCellForName,
    arrayCellNextRows,
    isSaveEvent,
    isSaveEvent.length,
    lengthFavoriteId,
  ]);

  //========================================================
  //управление попапами
  const [isEventAddPopupOpen, setIsEventAddPopupOpen] = useState(false);
  const [isQuickAddPopupOpen, setIsQuickAddPopupOpen] = useState(false);
  const [isOverviewPopupOpen, setIsOverviewPopupOpen] = useState(false);

  function handleEventAddClick() {
    closeAllPopups();
    setIsEventAddPopupOpen(true);
  }

  function handleQuickAddClick() {
    setIsQuickAddPopupOpen(true);
  }

  function handleOverviewClick() {
    setIsOverviewPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEventAddPopupOpen(false);
    setIsQuickAddPopupOpen(false);
    setIsOverviewPopupOpen(false);
  }

  const [saveResultQuickAdd, setSaveResultQuickAdd] = useState();

  function handleCellInActive(dataCell) {
    const isActive = arrayCellForName.some((i) => {
      if (i.id === dataCell.id) {
        i.active = true;
        return setActiveCell(dataCell);
      } else {
        return (i.active = false);
      }
    });

    return isActive;
  }

  const [selectedDate, setSelectedDate] = useState();

  useMemo(() => {
    if (activeCell.data !== undefined) {
      setSelectedDate(new Date(activeCell?.data));
    }
  }, [activeCell.data]);

  const selectedDay = String(selectedDate?.getDate()).padStart(2, "0");
  const selectedDayString = String(selectedDate?.getDate());

  const [selectedMonthString, setSelectedMonthString] = useState(
    String(arrayInflectMonths[selectedDate?.getMonth()])
  );

  const selectedMonth = String(selectedDate?.getMonth() + 1).padStart(2, "0");

  const [selectedYear, setSelectedYear] = useState(selectedDate?.getFullYear());

  useEffect(() => {
    if (activeCell.data !== undefined) {
      setSelectedMonthString(
        String(arrayInflectMonths[selectedDate.getMonth()])
      );
      setSelectedYear(selectedDate.getFullYear());
    }
  }, [activeCell.data, selectedDate]);

  const textPlaceholderForInputQuickAdd = `Событие на ${selectedDayString} ${selectedMonthString}`;

  const textPlaceholderForEventAdd = `${selectedDay} ${selectedMonthString} ${selectedYear}`;

  const dataForEventAdd = `${selectedYear}-${selectedMonth}-${selectedDay}`;

  return (
    <div className='app'>
      <Header
        activeCell={activeCell}
        isOpenEventAdd={isEventAddPopupOpen}
        isOpenQuickAdd={isQuickAddPopupOpen}
        onQuickAdd={handleQuickAddClick}
        onEventAdd={handleEventAddClick}
        onOpenOverview={handleOverviewClick}
        onClose={closeAllPopups}
        setSaveResultQuickAdd={setSaveResultQuickAdd}
        textForInputQuickAdd={textPlaceholderForInputQuickAdd}
        isSaveEvent={isSaveEvent}
        setDate={setDate}
      />
      <Main
        day={day}
        year={year}
        month={month}
        activeCell={activeCell}
        isSaveEvent={isSaveEvent}
        todayString={todayString}
        arrayCell={arrayCellForName}
        dataForEventAdd={dataForEventAdd}
        isOpenEventAdd={isEventAddPopupOpen}
        isOpenOverview={isOverviewPopupOpen}
        saveResultQuickAdd={saveResultQuickAdd}
        textPlaceholderForEventAdd={textPlaceholderForEventAdd}
        setDate={setDate}
        onClose={closeAllPopups}
        onCellActive={handleCellInActive}
        setIsSaveEvent={setIsSaveEvent}
        setArrayCellForName={setArrayCellForName}
      />
    </div>
  );
}

export default App;
