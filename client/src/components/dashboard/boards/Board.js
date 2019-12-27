import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { Droppable } from 'react-beautiful-dnd';

import Modal from '../../modals/Modal';
import {
  COLOR_DARK,
  COLOR_LIGHT,
  COLOR_PRIMARY
} from '../../../contants/styles';
import plus from '../../../assets/blue_plus.svg';
import NewTaskForm from '../tasks/NewTaskForm';
import SmallSpinner from '../../spinners/SmallSpinner';
import Task from '../tasks/Task';

const StyledDiv = styled.div`
  background-color: ${COLOR_LIGHT};
  opacity: ${props => (props.isDragging ? 0 : 1)};
  cursor: move;
  border-radius: 15px;
  padding: 20px;
`;

const Name = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${COLOR_DARK};
  margin-bottom: 30px;
  text-align: center;
`;

const StyledLink = styled.p`
  font-size: 24px;
  color: ${COLOR_PRIMARY};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 15px;

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

const TaskList = styled.div``;

function Board({ board, index, id }) {
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);
  const loadingId = useSelector(state => state.teams.loadingId);

  function handleClick() {
    setIsAddingNewTask(true);
  }

  function handleModalClose() {
    setIsAddingNewTask(false);
  }

  return (
    <Col md="4">
      <StyledDiv className="box">
        <Name>{board.name}</Name>
        {loadingId === id ? (
          <SmallSpinner />
        ) : (
          <Droppable droppableId={id}>
            {provided => (
              <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                {board.tasks.map((task, i) => (
                  <Task boardId={id} key={task._id} index={i} task={task} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        )}
        <StyledLink onClick={handleClick}>Add task</StyledLink>
        <Modal handleClose={handleModalClose} isOpen={isAddingNewTask}>
          <NewTaskForm handleModalClose={handleModalClose} boardId={id} />
        </Modal>
      </StyledDiv>
    </Col>
  );
}

export default Board;
