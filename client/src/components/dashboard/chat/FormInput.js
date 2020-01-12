import React, { useState } from 'react';
import styled from 'styled-components';

import {
  COLOR_LIGHT,
  XXS_SPACING,
  MEDIUM_SPACING,
  BIG_SPACING,
  sm,
  SMALL_SPACING
} from '../../../contants/styles';
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
  padding: ${XXS_SPACING} ${MEDIUM_SPACING};
  border-radius: 30px;
  margin: ${SMALL_SPACING} 0;
`;

const Wrapper = styled.div`
  @media ${sm} {
    display: flex;
    align-items: center;
  }
`;

const Icon = styled.img`
  width: 32px;
  margin-right: ${BIG_SPACING};
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
        <Icon src={emoji} alt="emoji" />
        <Icon src={attachment} alt="attachments" />
        <Icon src={photo} alt="upload photo" />
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
