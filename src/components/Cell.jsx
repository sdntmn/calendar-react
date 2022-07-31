import React from "react";

const Cell = () => {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleClick() {
    setIsAddPlacePopupOpen(true);
  }
  return (
    <>
      <div className='cell' onClick={handleClick}>
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
