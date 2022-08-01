import React from "react";

const ControlMonth = () => {
  return (
    <section className='controlMonth page__section'>
      <div className='controlMonth__button-wrap'>
        <button type='button' className='controlMonth__button-icon'>
          <div className='controlMonth__button-icon-arrow app__rotation'></div>
        </button>
        <span className='controlMonth__text'>Ноябрь 2021</span>
        <button type='button' className='controlMonth__button-icon'>
          <div className='controlMonth__button-icon-arrow'></div>
        </button>
      </div>
      <button className='controlMonth__extra-button' type='button'>
        <span className='controlMonth__button-title'>Сегодня</span>
      </button>
    </section>
  );
};

export default ControlMonth;
