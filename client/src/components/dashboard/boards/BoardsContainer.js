import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import HTML5Backed from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { Container, Row, Col } from 'react-bootstrap';

import { getTeam, updateTeamBoardsOrder } from '../../../actions/teams';
import Layout from '../../Layout';
import Board from './Board';
import FullSpinner from '../../spinners/FullSpinner';

function BoardsContainer({ match }) {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.teams.activeTeam.boards);
  const isLoading = useSelector(state => state.teams.isLoading);
  const [stateBoards, setStateBoards] = useState(boards);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragBoard = boards[dragIndex];
      const boardsOrder = update(boards, {
        $splice: [[dragIndex, 1], [hoverIndex, 0, dragBoard]]
      });
      setStateBoards(boardsOrder);
      dispatch(updateTeamBoardsOrder(match.params.id, boardsOrder));
    },
    [boards, match.params.id, dispatch]
  );

  useEffect(() => {
    setStateBoards(boards);
  }, [boards]);

  useEffect(() => {
    dispatch(getTeam(match.params.id));
  }, [dispatch, match.params.id]);

  if (isLoading) {
    return <FullSpinner />;
  }

  return (
    <Layout withNavbar>
      <Container>
        <Row>
          <Col md="3">Summary</Col>
          <Col md="9">
            <Row>
              <DndProvider backend={HTML5Backed}>
                {stateBoards.map((board, index) => (
                  <Board
                    key={board._id}
                    index={index}
                    id={board._id}
                    moveCard={moveCard}
                    board={board}
                  />
                ))}
              </DndProvider>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default BoardsContainer;
