import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { Container, Row, Col } from 'react-bootstrap';

import { getTeam } from '../../../actions/teams';
import { updateTasksBoard } from '../../../actions/boards';
import Layout from '../../Layout';
import Board from './Board';
import FullSpinner from '../../spinners/FullSpinner';
import TeamSummarySidebar from '../teams/TeamSummarySidebar';
import SmallSpinner from '../../spinners/SmallSpinner';

function BoardsContainer({ match }) {
  const dispatch = useDispatch();
  const team = useSelector(state => state.teams.activeTeam);
  const { isLoading, isBoardLoading } = useSelector(state => state.teams);
  const [stateBoards, setStateBoards] = useState(team.boards);

  useEffect(() => {
    setStateBoards(team.boards);
  }, [team.boards]);

  useEffect(() => {
    dispatch(getTeam(match.params.id));
  }, [dispatch, match.params.id]);

  function handleDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let startBoardIndex = 0;
    let finishBoardIndex = 0;
    const start = stateBoards.filter((board, i) => {
      if (board._id === source.droppableId) {
        startBoardIndex = i;
      }
      return board._id === source.droppableId;
    })[0];
    const finish = stateBoards.filter((board, i) => {
      if (board._id === destination.droppableId) {
        finishBoardIndex = i;
      }
      return board._id === destination.droppableId;
    })[0];

    const task = start.tasks.filter(task => task._id === draggableId)[0];

    if (JSON.stringify(start) === JSON.stringify(finish)) {
      const newTasks = Array.from(start.tasks);
      newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, task);
      start.tasks = newTasks;

      const newState = stateBoards.map((board, i) =>
        i === startBoardIndex ? start : board
      );

      dispatch(updateTasksBoard(match.params.id, newState));
      return setStateBoards(newState);
    }

    const startTasks = Array.from(start.tasks);
    startTasks.splice(source.index, 1);
    start.tasks = startTasks;

    const finishTasks = Array.from(finish.tasks);
    finishTasks.splice(destination.index, 0, task);
    finish.tasks = finishTasks;

    const newFinish = stateBoards.map((board, i) =>
      i === finishBoardIndex ? finish : board
    );

    dispatch(updateTasksBoard(match.params.id, newFinish));
    setStateBoards(newFinish);
  }

  if (isLoading) {
    return <FullSpinner />;
  }

  return (
    <Layout withNavbar>
      <Container>
        <Row>
          <Col md="3">
            <TeamSummarySidebar team={team} />
          </Col>
          <Col md="9">
            <Row>
              {isBoardLoading ? (
                <SmallSpinner />
              ) : (
                <DragDropContext onDragEnd={handleDragEnd}>
                  {stateBoards.map((board, index) => (
                    <Board
                      key={board._id}
                      index={index}
                      id={board._id}
                      board={board}
                    />
                  ))}
                </DragDropContext>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default BoardsContainer;
