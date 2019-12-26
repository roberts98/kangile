import React from 'react';
import styled from 'styled-components';

import { COLOR_WHITE } from '../../../contants/styles';
import times from '../../../assets/times.svg';

const Wrapper = styled.div`
  background-color: ${COLOR_WHITE};
  border-radius: 10px;
  padding: 20px 40px 20px 10px;
  position: relative;

  &::after {
    content: url(${times});
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
`;

const Name = styled.h3`
  font-size: 18px;
`;

function Task({ task }) {
  return (
    <Wrapper>
      <Name>{task.name}</Name>
    </Wrapper>
  );
}

export default Task;
