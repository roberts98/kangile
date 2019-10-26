import React from 'react';
import styled from 'styled-components';

import LoginForm from '../../components/auth/LoginForm';
import Layout from '../../components/Layout';
import { H100Container } from '../../components/grid/Container';
import { H100Row } from '../../components/grid/Row';

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
      <H100Container>
        <H100Row center>
          <Wrapper>
            <LoginForm />
          </Wrapper>
        </H100Row>
      </H100Container>
    </Layout>
  );
}

export default LoginPage;
