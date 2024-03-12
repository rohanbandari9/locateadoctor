import React from 'react';
import './Modal.css';

const Modal = ({ children, className }) => {
  function handleOutsideClick() {
    console.log('outside clicked');
    // document.querySelector('.edit-modal-overlay').classList.remove('.edit-modal-overlay');
  }
  return (
    <div className="edit-modal-overlay" onClick={handleOutsideClick}>
      <div className="edit-modal">
        <div className={`modal-content ${className || ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
