import React from 'react';
import { Container } from 'react-bootstrap';

import { LoginForm } from '../../components/auth';
import Layout from '../../components/Layout';
import { Center } from '../../components/styled/common';

function LoginPage() {
  return (
    <Layout>
      <Container>
        <Center>
          <LoginForm />
        </Center>
      </Container>
    </Layout>
  );
}

export default LoginPage;
