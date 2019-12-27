import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { deleteTask } from '../../../actions/boards';
import { COLOR_WHITE } from '../../../contants/styles';
import times from '../../../assets/times.svg';

const Wrapper = styled.div`
  background-color: ${COLOR_WHITE};
  border-radius: 10px;
  padding: 20px 40px 20px 10px;
  position: relative;
  margin-bottom: 20px;
`;

const RemoveIcon = styled.span`
  background: url(${times});
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const Name = styled.h3`
  font-size: 18px;
`;

function Task({ task, boardId }) {
  const dispatch = useDispatch();

  function handleRemoveClick() {
    dispatch(deleteTask(boardId, task._id));
  }

  return (
    <Wrapper>
      <Name>{task.name}</Name>
      <RemoveIcon onClick={handleRemoveClick} />
    </Wrapper>
  );
}

export default Task;
