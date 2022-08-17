import React, { useEffect } from "react";

const Popup = function ({
  isOpen,
  onClose,
  children,
  name,
  idPopup,
  onSubmit,
}) {
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

  return (
    <div className={`popup ${isOpen && "popup__is-opened"}`} id={idPopup}>
      <form name={name} className='popup__container' onSubmit={onSubmit}>
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
