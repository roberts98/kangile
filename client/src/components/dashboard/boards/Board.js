import React, { useState } from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { Droppable } from 'react-beautiful-dnd';

import { Modal } from '../../modals';
import {
  COLOR_DARK,
  COLOR_LIGHT,
  COLOR_PRIMARY,
  FONT_DEFAULT,
  FONT_BIG,
  SMALL_SPACING,
  MEDIUM_SPACING,
  XXS_SPACING
} from '../../../contants/styles';
import { NewTaskForm, DraggableTask } from '../tasks';
import plus from '../../../assets/blue_plus.svg';

const StyledDiv = styled.div`
  background-color: ${COLOR_LIGHT};
  opacity: ${props => (props.isDragging ? 0 : 1)};
  cursor: move;
  border-radius: 15px;
`;

const Column = styled(Col)`
  margin-bottom: ${SMALL_SPACING};
`;

const Name = styled.h2`
  font-size: ${FONT_BIG};
  font-weight: 700;
  color: ${COLOR_DARK};
  text-align: center;
  padding: ${SMALL_SPACING};
  padding-bottom: 0;
`;

const StyledLink = styled.p`
  font-size: ${FONT_DEFAULT};
  color: ${COLOR_PRIMARY};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${SMALL_SPACING};
  padding-top: ${XXS_SPACING};

  &::before {
    content: '';
    background-image: url(${plus});
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    width: 20px;
    height: 20px;
    position: relative;
    left: -5px;
  }
`;

const BoardWrapper = styled.div`
  background: ${({ isDragging }) => isDragging && COLOR_PRIMARY};
  padding: ${SMALL_SPACING};
`;

function Board({ board, id }) {
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);

  function handleClick() {
    setIsAddingNewTask(true);
  }

  function handleModalClose() {
    setIsAddingNewTask(false);
  }

  return (
    <Column md="4">
      <StyledDiv className="box">
        <Name>{board.name}</Name>
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <BoardWrapper
              isDragging={snapshot.isDraggingOver}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {board.tasks.map((task, i) => (
                <DraggableTask
                  boardId={id}
                  key={task._id}
                  index={i}
                  task={task}
                />
              ))}
              {provided.placeholder}
            </BoardWrapper>
          )}
        </Droppable>
        <StyledLink onClick={handleClick}>Add task</StyledLink>
        <Modal handleClose={handleModalClose} isOpen={isAddingNewTask}>
          <NewTaskForm handleModalClose={handleModalClose} boardId={id} />
        </Modal>
      </StyledDiv>
    </Column>
  );
}

export default Board;
