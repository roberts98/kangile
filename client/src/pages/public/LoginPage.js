import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import LoginForm from '../../components/auth/LoginForm';
import Layout from '../../components/Layout';

const Wrapper = styled.div`
  background: #e0e0e0;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LoginPage() {
  return (
    <Layout withNavbar>
      <Container>
        <Wrapper>
          <LoginForm />
        </Wrapper>
      </Container>
    </Layout>
  );
}

export default LoginPage;
