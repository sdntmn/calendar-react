import React, { useState, useEffect } from "react";
import Cell from "./Cell";

const Table = () => {
  const DAYS_OF_THE_WEEK = [
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
    "SUN",
  ];

  const today = new Date();
  const [date, setDate] = useState(today);

  const startingDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const startingM = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  const startingDate1 = Math.round(
    (startingM - startingDate) / 1000 / 3600 / 24
  );

  // useEffect(() => {
  //   setDay(date.getDate());
  //   setMonth(date.getMonth());
  //   setYear(date.getFullYear());
  //   // setStartDay(getStartDayOfMonth(date));
  // }, [date]);

  const table = DAYS_OF_THE_WEEK.map((item, index) => (
    <Cell
      key={index}
      dataRow={item}
      index={index + 1}
      length={DAYS_OF_THE_WEEK.length}></Cell>
  ));

  return (
    <>
      <section className='table page__section'>{table}</section>
    </>
  );
};

export default Table;
