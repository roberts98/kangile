import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import { deleteTask } from '../../../actions/boards';
import {
  COLOR_WHITE,
  FONT_MEDIUM,
  BIG_SPACING,
  XS_SPACING,
  SMALL_SPACING,
  COLOR_SUPER_LIGHT
} from '../../../contants/styles';
import { Link } from '../../styled/links';
import times from '../../../assets/times.svg';

const Wrapper = styled.div`
  background-color: ${({ isDragging }) =>
    isDragging ? COLOR_SUPER_LIGHT : COLOR_WHITE};
  border-radius: 10px;
  padding: ${SMALL_SPACING} ${BIG_SPACING} ${SMALL_SPACING} ${XS_SPACING};
  position: relative;
  margin-bottom: ${SMALL_SPACING};
`;

const RemoveIcon = styled.span`
  background: url(${times});
  background-repeat: no-repeat;
  background-size: contain;
  width: 16px;
  height: 16px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const Name = styled.h3`
  font-size: ${FONT_MEDIUM};
`;

function Task({ task, boardId, index, isDragging }) {
  const dispatch = useDispatch();

  function handleRemoveClick() {
    dispatch(deleteTask(boardId, task._id));
  }

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided, snapshot) => (
        <Wrapper
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Link to={`/user/teams/${boardId}/${task._id}`}>
            <Name>{task.name}</Name>
          </Link>
          <RemoveIcon onClick={handleRemoveClick} />
        </Wrapper>
      )}
    </Draggable>
  );
}

export default Task;
