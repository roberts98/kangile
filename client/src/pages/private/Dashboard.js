import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import TeamsContainer from '../../components/dashboard/teams/TeamsContainer';

function Dashboard() {
  return (
    <Layout withNavbar>
      <TeamsContainer />
    </Layout>
  );
}

export default Dashboard;
