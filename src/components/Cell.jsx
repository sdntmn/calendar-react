import React from "react";

const Cell = () => {
  return (
    <>
      <div className='cell'>
        <div className='cell__wrap'>
          <span className='cell__heading'>Понедельник, </span>
          <span className='cell__heading cell__title'>Шашлыки</span>
          <span className='cell__heading'>Филипп Коров, Дмитрий Табасков</span>
        </div>
      </div>
    </>
  );
};

export default Cell;
