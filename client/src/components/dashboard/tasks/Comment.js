import React from 'react';
import styled from 'styled-components';

import avatar from '../../../assets/avatar.png';
import {
  COLOR_LIGHT,
  BIG_SPACING,
  SMALL_SPACING,
  XXS_SPACING,
  FONT_DEFAULT,
  FONT_MEDIUM
} from '../../../contants/styles';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${BIG_SPACING};
`;

const ContentWrapper = styled.div`
  background-color: ${COLOR_LIGHT};
  width: 100%;
  padding: ${XXS_SPACING} ${SMALL_SPACING};
  border-radius: 10px;
  margin-left: ${BIG_SPACING};
`;

const Name = styled.h4`
  font-size: ${FONT_MEDIUM};
  margin-bottom: 0;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: ${FONT_DEFAULT};
  margin-top: 0;
`;

function Comment({ comment }) {
  return (
    <Wrapper>
      <img width="75" height="75" src={avatar} alt="avatar" />
      <ContentWrapper>
        <Name>{comment.username}</Name>
        <Text>{comment.message}</Text>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Comment;
