import React from 'react';
import styled from 'styled-components';

import { H100Container } from '../../components/grid/Container';
import { H100Row } from '../../components/grid/Row';
import H1 from '../../components/headers/H1';
import RegisterForm from '../../components/auth/RegisterForm';
import Layout from '../../components/Layout';

const Left = styled.div`
  width: 50%;
  margin-right: 15px;
`;

const Right = styled.div`
  width: 50%;
  margin-left: 15px;
`;

const Heading = styled(H1)`
  margin-bottom: 25px;
`;

const List = styled.ul`
  font-size: 30px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  font-weight: 500;
  list-style: none;
`;

function HomePage() {
  return (
    <Layout blue withNavbar>
      <H100Container>
        <H100Row center>
          <Left>
            <Heading
              color="white"
              title="Task managment was never so easy! Register free account on KANGILE!"
            />
            <RegisterForm />
          </Left>
          <Right>
            <Heading align="center" color="white" title="Why KANGILE?" />
            <List>
              <li>It's 100% free</li>
              <li>Custom your boards</li>
              <li>Work in teams</li>
              <li>Unlimited team members</li>
              <li>Built-in chat</li>
              <li>Real-time notificaitons</li>
            </List>
          </Right>
        </H100Row>
      </H100Container>
    </Layout>
  );
}

export default HomePage;
