import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import Modal from '../../modals/Modal';
import {
  COLOR_DARK,
  COLOR_LIGHT,
  COLOR_PRIMARY
} from '../../../contants/styles';
import plus from '../../../assets/blue_plus.svg';
import NewTaskForm from '../tasks/NewTaskForm';
import TasksList from '../tasks/TasksList';
import FullSpinner from '../../spinners/FullSpinner';

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

function Board({ board, index, moveCard, id }) {
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);
  const loadingId = useSelector(state => state.teams.loadingId);

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'BOARD',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  function openModal() {
    setIsAddingNewTask(true);
  }

  function handleModalClose() {
    setIsAddingNewTask(false);
  }

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'BOARD', id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(drop(ref));

  return (
    <Col md="4">
      {loadingId === id ? (
        <FullSpinner />
      ) : (
        <StyledDiv isDragging={isDragging} ref={ref} className="box">
          <Name>{board.name}</Name>
          <TasksList tasks={board.tasks} />
          <StyledLink onClick={openModal}>Add task</StyledLink>
          <Modal isOpen={isAddingNewTask}>
            <NewTaskForm handleModalClose={handleModalClose} boardId={id} />
          </Modal>
        </StyledDiv>
      )}
    </Col>
  );
}

export default Board;
