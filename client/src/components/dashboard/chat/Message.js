import React from 'react';
import styled from 'styled-components';

import {
  COLOR_PRIMARY,
  COLOR_LIGHT,
  COLOR_WHITE
} from '../../../contants/styles';

const Wrapper = styled.div`
  background-color: ${({ isAuthor }) =>
    isAuthor ? COLOR_PRIMARY : COLOR_LIGHT};
  border-radius: 10px;
  color: ${({ isAuthor }) => isAuthor && COLOR_WHITE};
  padding: 10px 20px;
  margin-bottom: 30px;
  width: 60%;
  float: ${({ isAuthor }) => (isAuthor ? 'right' : 'left')};
`;

function Message({ message, isAuthor }) {
  return <Wrapper isAuthor={isAuthor}>{message.message}</Wrapper>;
}

export default Message;
