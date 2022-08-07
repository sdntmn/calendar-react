import React, { useEffect } from "react";

const Popup = function ({ isOpen, onClose, children, name, idPopup }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscapeClose = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClose = (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target === event.currentTarget && isOpen) {
      console.log("open add popup");
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen && "popup__is-opened"}`}
      name={name}
      id={idPopup}
      onMouseDown={handleOverlayClose}>
      <form name='popup__form' className='popup__container'>
        <div className='popup__close-btn'>
          <button
            className='popup__close'
            type='button'
            aria-label='Кнопка закрытия формы'
            onClick={onClose}></button>
        </div>
        {children}
      </form>
    </div>
  );
};

export default Popup;
