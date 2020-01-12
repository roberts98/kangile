import React from 'react';
import RModal from 'react-modal';
import styled from 'styled-components';

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

const Content = styled.div`
  padding: 20px 0;
`;

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
      <Content>{children}</Content>
    </RModal>
  );
}

export default Modal;
