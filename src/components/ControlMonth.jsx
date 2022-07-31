import React from "react";

const ControlMonth = () => {
  return (
    <section className='controlMonth page__section'>
      <div class='controlMonth__button-wrap'>
        <button type='button' class='controlMonth__button-icon'>
          <div class='controlMonth__button-icon-arrow app__rotation'></div>
        </button>
        <span class='controlMonth__text'>Ноябрь 2021</span>
        <button type='button' class='controlMonth__button-icon'>
          <div class='controlMonth__button-icon-arrow'></div>
        </button>
      </div>
      <button class='controlMonth__extra-button' type='button'>
        <span class='controlMonth__button-title'>Сегодня</span>
      </button>
    </section>
  );
};

export default ControlMonth;
