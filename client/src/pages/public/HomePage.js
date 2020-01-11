import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';

import Navbar from '../../components/common/navbar/NavbarPublic';
import {
  COLOR_PRIMARY_RGB,
  COLOR_WHITE,
  COLOR_PRIMARY
} from '../../contants/styles';
import bg from '../../assets/bg.png';

const Background = styled.div`
  background: url(${bg});
  min-width: 100vw;
  min-height: 100vh;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(${COLOR_PRIMARY_RGB}, 0.4);
`;

const Content = styled(Container)`
  margin-top: 100px;
`;

const BigText = styled.h1`
  color: ${COLOR_WHITE};
  font-size: 100px;
  font-weight: 700;
`;

const Text = styled.h3`
  color: ${COLOR_WHITE};
  font-size: 48px;
  font-weight: 500;
`;

const Button = styled(Link)`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
  color: ${COLOR_WHITE};
  border-radius: 10px;
  display: block;
  text-align: center;
  width: 100%;
  margin-top: 40px;
  border: 5px solid #fff;
  text-decoration: none;
  transition: all 0.4s;

  &:active,
  &:hover,
  &:focus {
    text-decoration: none;
    background: ${COLOR_WHITE};
    color: ${COLOR_PRIMARY};
  }
`;

function HomePage() {
  return (
    <Background>
      <Overlay />
      <Navbar isHomePage />
      <Content>
        <Row>
          <Col md="6">
            <BigText>And everything becomes easier!</BigText>
          </Col>
          <Col md="6" style={{ alignSelf: 'center' }}>
            <Text>
              Kangile is a place that will allow you to separate and organize
              all tasks in an easy and accessible way.
            </Text>
            <Button to="/register">See More</Button>
          </Col>
        </Row>
      </Content>
    </Background>
  );
}

export default HomePage;
