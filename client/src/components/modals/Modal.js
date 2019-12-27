import React from 'react';
import RModal from 'react-modal';

const defaultStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

function Modal({ isOpen, handleClose, children }) {
  return (
    <RModal
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={handleClose}
      style={defaultStyles}
      ariaHideApp={false}
    >
      {children}
    </RModal>
  );
}

export default Modal;
