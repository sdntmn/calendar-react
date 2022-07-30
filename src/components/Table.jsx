import React, { useState, useEffect } from "react";
import CellHeading from "./CellHeading";
import Cell from "./Cell";

const Table = () => {
  const cellLength = 35;
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
  const ROWS_COUNT = ["1", "2", "3", "4", "5"];

  const today = new Date();
  const [date, setDate] = useState(today);
  // const [day, setDay] = useState(date.getDate());
  // const [month, setMonth] = useState(date.getMonth());
  // const [year, setYear] = useState(date.getFullYear());

  const startingDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const startingM = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  const startingDate1 = Math.round(
    (startingM - startingDate) / 1000 / 3600 / 24
  );

  //   startingDate.setDate(
  //   startingDate.getDate() - (startingDate.getDay() - 1)
  // );

  console.log(startingDate);
  console.log(startingDate.getDay() - 1);

  console.log(startingDate1);
  console.log(date.getFullYear());
  console.log(date.getMonth() + 1);
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

// {/* <table style={{ borderCollapse: "collapse" }}>
//   {/* <thead className='cell'>
//             <tr className='cell'>{table}</tr>
//           </thead> */}

//   <tbody style={{ borderCollapse: "collapse" }}>
//     <tr className='cell'>
//       <tr className='cell'>{table}</tr>
//     </tr>
//     <tr className='cell'>
//       <tr className='cell'>{table}</tr>
//     </tr>
//     <tr className='cell'>
//       <tr className='cell'>{table}</tr>
//     </tr>
//     <tr className='cell'>
//       <tr className='cell'>{table}</tr>
//     </tr>
//     <tr className='cell'>
//       <tr className='cell'>{table}</tr>
//     </tr>
//   </tbody>
// </table>;
