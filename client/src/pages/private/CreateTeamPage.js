import React from 'react';
import { Container } from 'react-bootstrap';

import Layout from '../../components/Layout';
import { CreateTeamForm } from '../../components/dashboard/teams';
import { Center } from '../../components/styled/common';

function CreateTeam() {
  return (
    <Layout>
      <Container>
        <Center>
          <CreateTeamForm />
        </Center>
      </Container>
    </Layout>
  );
}

export default CreateTeam;
