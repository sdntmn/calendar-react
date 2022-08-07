import React from "react";
import { arrayMonths } from "../data/arrayMonth";
import {
  STEP_TRANSITION,
  FIRST_MONTH_FROM_ARRAY,
  LAST_MONTH_FROM_ARRAY,
} from "../utils/config";

const ControlMonth = ({ month, year, setDate, day }) => {
  const prevMonth = () => {
    if (month === FIRST_MONTH_FROM_ARRAY) {
      setDate(
        new Date(year - STEP_TRANSITION, month === LAST_MONTH_FROM_ARRAY, day)
      );
    }
    setDate(new Date(year, month - STEP_TRANSITION, day));
  };

  const nextMonth = () => {
    if (month === LAST_MONTH_FROM_ARRAY) {
      setDate(
        new Date(year + STEP_TRANSITION, month === FIRST_MONTH_FROM_ARRAY, day)
      );
    }
    setDate(new Date(year, month + STEP_TRANSITION, day));
  };

  const btnToday = () => {
    setDate(new Date());
  };

  return (
    <section className='controlMonth page__section'>
      <div className='controlMonth__button-wrap'>
        <button
          type='button'
          className='controlMonth__button-icon'
          onClick={prevMonth}>
          <div className='controlMonth__button-icon-arrow app__rotation'></div>
        </button>
        <span className='controlMonth__text'>
          {arrayMonths[month]} {year}
        </span>
        <button
          type='button'
          className='controlMonth__button-icon'
          onClick={nextMonth}>
          <div className='controlMonth__button-icon-arrow'></div>
        </button>
      </div>
      <button
        className='controlMonth__extra-button'
        type='button'
        onClick={btnToday}>
        <span className='controlMonth__button-title'>Сегодня</span>
      </button>
    </section>
  );
};

export default ControlMonth;
