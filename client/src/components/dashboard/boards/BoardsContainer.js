import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import HTML5Backed from 'react-dnd-html5-backend';
import update from 'immutability-helper';

import { getTeam, updateTeamBoardsOrder } from '../../../actions/teams';
import Layout from '../../Layout';
import { H100Container } from '../../grid/Container';
import { H100Row } from '../../grid/Row';
import Board from './Board';

function BoardsContainer({ match }) {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.teams.activeTeam.boards);
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

  return (
    <Layout withNavbar>
      <H100Container>
        <H100Row>
          <DndProvider backend={HTML5Backed}>
            {stateBoards.map((board, index) => (
              <Board
                key={board._id}
                index={index}
                id={board._id}
                moveCard={moveCard}
                name={board.name}
              />
            ))}
          </DndProvider>
        </H100Row>
      </H100Container>
    </Layout>
  );
}

export default BoardsContainer;
