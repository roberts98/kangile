import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '../../components/Layout';
import TeamsContainer from '../../components/dashboard/teams/TeamsContainer';
import { getTeams } from '../../actions/teams';
import FullSpinner from '../../components/spinners/FullSpinner';

function Dashboard() {
  const dispatch = useDispatch();
  const { teams, isLoading } = useSelector(state => state.teams);

  useEffect(() => {
    if (teams === null) {
      dispatch(getTeams());
    }
  }, [teams, dispatch]);

  if (isLoading) {
    return <FullSpinner />;
  }

  return (
    <Layout>
      <TeamsContainer />
    </Layout>
  );
}

export default Dashboard;
