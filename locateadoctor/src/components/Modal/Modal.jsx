import React from 'react';
import './Modal.css';

const Modal = ({ children, className }) => {
  return (
    <div className="edit-modal-overlay">
      <div className="edit-modal">
        <div className={`modal-content ${className || ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
