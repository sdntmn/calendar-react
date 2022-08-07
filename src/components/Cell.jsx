import React from "react";

const Cell = ({ dataRow }) => {
  return (
    <>
      <div className='cell'>
        <div className='cell__wrap'>
          <span className='cell__heading'>{dataRow} </span>
          <span className='cell__heading cell__title'></span>
          <span className='cell__heading'></span>
        </div>
      </div>
    </>
  );
};

export default Cell;
