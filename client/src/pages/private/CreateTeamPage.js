import React from 'react';
import { Container } from 'react-bootstrap';

import Layout from '../../components/Layout';
import CreateTeamForm from '../../components/dashboard/teams/CreateTeamForm';

function CreateTeam() {
  return (
    <Layout>
      <Container>
        <CreateTeamForm />
      </Container>
    </Layout>
  );
}

export default CreateTeam;
