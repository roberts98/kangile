import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTeam } from '../../../actions/teams';

function BoardsContainer({ match }) {
  const dispatch = useDispatch();
  console.log(useSelector(state => state.teams.activeTeam));

  useEffect(() => {
    dispatch(getTeam(match.params.id));
  }, [dispatch, match.params.id]);

  return <div>Board BoardsContainer</div>;
}

export default BoardsContainer;
