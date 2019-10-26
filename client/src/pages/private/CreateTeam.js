import React from 'react';

import Layout from '../../components/Layout';
import { H100Container } from '../../components/grid/Container';
import { H100Row } from '../../components/grid/Row';
import CreateTeamForm from '../../components/dashboard/teams/CreateTeamForm';

function CreateTeam() {
  return (
    <Layout withNavbar>
      <H100Container>
        <H100Row center column>
          <CreateTeamForm />
        </H100Row>
      </H100Container>
    </Layout>
  );
}

export default CreateTeam;
