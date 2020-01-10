import React, { useState } from 'react';
import styled from 'styled-components';

import { COLOR_LIGHT } from '../../../contants/styles';
import attachment from '../../../assets/attachment.svg';
import photo from '../../../assets/photo.svg';
import emoji from '../../../assets/emoji.svg';

const StyledForm = styled.form`
  clear: both;
`;

const StyledInput = styled.input`
  background: ${COLOR_LIGHT};
  border: unset;
  width: 100%;
  padding: 10px 24px;
  border-radius: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 32px;
  cursor: pointer;
`;

function FormInput({ handleSubmit }) {
  const [message, setMessage] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    setMessage('');
    handleSubmit(message);
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <Wrapper>
        <Icon src={emoji} alt="emotki" />
        <Icon src={attachment} alt="emotki" />
        <Icon src={photo} alt="emotki" />
        <StyledInput
          placeholder="Type your message..."
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </Wrapper>
    </StyledForm>
  );
}

export default FormInput;
