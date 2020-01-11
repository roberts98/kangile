import React from 'react';
import { Container } from 'react-bootstrap';

import { RegisterForm } from '../../components/auth';
import Layout from '../../components/Layout';
import { Center } from '../../components/styled/common';

function LoginPage() {
  return (
    <Layout withNavbar>
      <Container>
        <Center>
          <RegisterForm />
        </Center>
      </Container>
    </Layout>
  );
}

export default LoginPage;
