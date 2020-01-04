import React from 'react';
import styled from 'styled-components';

import avatar from '../../../assets/avatar.png';
import { COLOR_LIGHT } from '../../../contants/styles';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const ContentWrapper = styled.div`
  background-color: ${COLOR_LIGHT};
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  margin-left: 40px;
`;

const Name = styled.h4`
  font-size: 20px;
  margin-bottom: 0;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 20px;
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
