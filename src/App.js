import React, { useState, useEffect } from "react";
import { TOTAL_CELL } from "./utils/config.js";
import { arrayDayWeek } from "./data/arrayWeek.js";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const today = new Date();

  const [date, setDate] = useState(today);
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  // возвращает день месяца указанной даты по местному времени
  const [day, setDay] = useState(date.getDate());
  const [arrayCell, setArrayCell] = useState([]);
  const [arrayCellForName, setArrayCellForName] = useState([]);

  const [firstDaySelectedMount, setFirstDaySelectedMount] = useState(
    new Date(date.getFullYear(), date.getMonth(), 1)
  );

  const [prevMountFirstDay, setPrevMountFirstDay] = useState(
    new Date(date.getFullYear(), date.getMonth() - 1, 1)
  );

  const [nextMountFirstDay, setNextMountFirstDay] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, 1)
  );

  const [nextSecondFirstDay, setNextSecondFirstDay] = useState(
    new Date(date.getFullYear(), date.getMonth() + 2, 1)
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
  const [dayWeekStartMonth, setDayWeekStartMonth] = useState();
  useEffect(() => {
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
  }, [date]);

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
  const arrDayMount = (countDay, setState) => {
    const newArr = [];
    for (let i = 0; i < countDay; i++) {
      newArr.push(i + 1);
    }
    return setState(newArr);
  };

  const [arrDaySelectedMount, setArrDaySelectedMount] = useState([]);
  useEffect(() => {
    arrDayMount(amountDaySelectedMount, setArrDaySelectedMount);
  }, [amountDaySelectedMount]);

  //========================================================
  // Получение массива предыдущего месяца
  const [arrDayPrevMount, setArrDayPrevMount] = useState([]);
  useEffect(() => {
    arrDayMount(amountDayPrevMount, setArrDayPrevMount);
  }, [amountDayPrevMount]);

  //========================================================
  // Получение массива следующего месяца
  const [arrDayNextMount, setArrDayNextMount] = useState([]);
  useEffect(() => {
    arrDayMount(amountDayNextMount, setArrDayNextMount);
  }, [amountDayNextMount]);

  const [arrFreeCellNext, setArrFreeCellNext] = useState([]);

  //========================================================
  //Получить массив для свободных ячеек следующего месяца
  useEffect(() => {
    const arrDayMountForCell = () => {
      //Количество свободных ячеек
      const countFreeCell = TOTAL_CELL - amountDaySelectedMount;
      //Количество ячеек для следующего месяца
      let countFreeCellForStart = countFreeCell - dayWeekStartMonth;
      if (countFreeCellForStart !== undefined) {
        let arrayDayPrev = arrDayNextMount.slice(0, countFreeCellForStart);
        return arrayDayPrev;
      }
    };
    setArrFreeCellNext(arrDayMountForCell());
  }, [
    amountDaySelectedMount,
    arrDayNextMount,
    arrDaySelectedMount,
    dayWeekStartMonth,
  ]);

  //========================================================
  // Получение массива ячеек предыдущего месяца
  const [arrFreeCellPrev, setArrFreeCellPrev] = useState([]);
  useEffect(() => {
    const arrDayMountForCellPrev = () => {
      //Длина массива предыдущего месяца
      const lengthArrayPrevMount = arrDayPrevMount.length;

      //Количество ячеек для вырезания из предыдущего месяца
      let countCellForDelete = lengthArrayPrevMount - dayWeekStartMonth;

      let arrayDayPrev;
      if (dayWeekStartMonth === 0) {
        return (arrayDayPrev = []);
      } else {
        arrayDayPrev = arrDayPrevMount.slice(countCellForDelete);
        return arrayDayPrev;
      }
    };
    setArrFreeCellPrev(arrDayMountForCellPrev());
  }, [amountDaySelectedMount, arrDayPrevMount, dayWeekStartMonth]);

  //========================================================
  // Слияние массивов
  useEffect(() => {
    const newLocal = undefined;
    if (arrFreeCellNext !== newLocal)
      setArrayCell([
        ...arrFreeCellPrev,
        ...arrDaySelectedMount,
        ...arrFreeCellNext,
      ]);
  }, [arrDaySelectedMount, arrFreeCellNext, arrFreeCellPrev]);

  //=========================================================
  // Получение массива ячеек первого ряда
  const [arrayCellForOneRow, setArrayCellForOneRow] = useState([]);
  useEffect(() => {
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
  }, [arrayCell]);

  //=========================================================
  // Получение массива со 2 по 6 ряд
  const [arrayCellNextRows, setCellNextRows] = useState([]);
  useEffect(() => {
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
  }, [arrayCell]);

  //========================================================
  //Получить массив первого ряда с днем недели
  const [arrayCombinedNameForCell, setArrayCombinedNameForCell] = useState();

  const getArrayCombinedName = (arrayOne, arraySecond, setState) => {
    return setState(
      arrayOne.map(function (item, index) {
        return `${item}, ${arraySecond[index]} `;
      })
    );
  };

  useEffect(() => {
    getArrayCombinedName(
      arrayDayWeek,
      arrayCellForOneRow,
      setArrayCombinedNameForCell
    );
  }, [arrayCellForOneRow]);

  //========================================================
  // Слияние массивов рядов
  useEffect(() => {
    const newLocal = undefined;
    if (arrayCombinedNameForCell !== newLocal)
      setArrayCellForName([...arrayCombinedNameForCell, ...arrayCellNextRows]);
  }, [arrayCellNextRows, arrayCombinedNameForCell]);

  //========================================================

  //   Чтобы добиться корректного сравнения дат, можно использовать метод getTime():
  //   const equalDate1 = new Date('2022-03-13');
  // const equalDate2 = new Date('2022-03-13');
  // console.log(equalDate1.getTime() == equalDate2.getTime()); // true

  // const [arrayObjectForCell, setArrayObjectForCell] = useState({
  //   name: "",
  //   title: "",
  //   description: "",
  //   data: "",
  // });

  // console.log(arrayObjectForCell);

  // const getArrayObjectForCell = (arrayOne, setState) => {
  //   var myObject = {};
  //   return setState(
  //     arrayOne.map(function (item, index) {
  //       return new Object({
  //         name: `${item}`,
  //         title: "",
  //         description: "",
  //         data: "",
  //       });
  //     })
  //   );
  // };
  // console.log(getArrayObjectForCell(arrayCellForName, setArrayObjectForCell));

  // useEffect(() => {
  //   if (arrayCellForName.length === 42) {
  //     getArrayObjectForCell(arrayCellForName, setArrayObjectForCell);
  //   }
  // }, [arrayCellForName]);

  //========================================================
  //управление попапами
  const [isEventAddPopupOpen, setIsEventAddPopupOpen] = useState(false);
  const [isQuickAddPopupOpen, setIsQuickAddPopupOpen] = useState(false);

  function handleEventAddClick() {
    closeAllPopups();
    setIsEventAddPopupOpen(true);
  }

  function handleQuickAddClick() {
    setIsQuickAddPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEventAddPopupOpen(false);
    setIsQuickAddPopupOpen(false);
  }

  return (
    <div className='app'>
      <Header
        onQuickAdd={handleQuickAddClick}
        isOpenEventAdd={isEventAddPopupOpen}
      />
      <Main
        arrayCell={arrayCellForName}
        isOpenEventAdd={isEventAddPopupOpen}
        isOpenQuickAdd={isQuickAddPopupOpen}
        onEventAdd={handleEventAddClick}
        onClose={closeAllPopups}
        month={month}
        year={year}
        day={day}
        setDate={setDate}
      />
    </div>
  );
}

export default App;
