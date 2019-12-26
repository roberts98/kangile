import React from 'react';
import RModal from 'react-modal';

const defaultStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function Modal({ isOpen, handleClose, children }) {
  return (
    <RModal isOpen={isOpen} onRequestClose={handleClose} style={defaultStyles}>
      {children}
    </RModal>
  );
}

export default Modal;
