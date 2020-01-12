import React from 'react';
import styled from 'styled-components';

import {
  COLOR_PRIMARY,
  COLOR_LIGHT,
  COLOR_WHITE,
  md,
  XXS_SPACING,
  SMALL_SPACING,
  MEDIUM_SPACING
} from '../../../contants/styles';

const Wrapper = styled.div`
  background-color: ${({ isAuthor }) =>
    isAuthor ? COLOR_PRIMARY : COLOR_LIGHT};
  border-radius: 10px;
  color: ${({ isAuthor }) => isAuthor && COLOR_WHITE};
  padding: ${XXS_SPACING} ${SMALL_SPACING};
  margin-bottom: ${MEDIUM_SPACING};
  width: 90%;
  float: ${({ isAuthor }) => (isAuthor ? 'right' : 'left')};

  @media ${md} {
    width: 60%;
  }
`;

function Message({ message, isAuthor }) {
  return <Wrapper isAuthor={isAuthor}>{message.message}</Wrapper>;
}

export default Message;
