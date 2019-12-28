import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import Team from './Team';
import FullSpinner from '../../spinners/FullSpinner';
import { COLOR_PRIMARY, COLOR_WHITE } from '../../../contants/styles';

export const Button = styled.button`
  display: block;
  background-color: ${COLOR_PRIMARY};
  color: ${COLOR_WHITE};
  font-size: ${props => (props.big ? '24px' : '12px')};
  font-weight: 700;
  text-align: center;
  padding: 5px 10px;
  border-radius: 10px;
  border: 2px solid transparent;
  text-transform: uppercase;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    background: transparent;
    color: ${COLOR_PRIMARY};
    border: 2px solid ${COLOR_PRIMARY};

    a {
      color: ${COLOR_PRIMARY};
    }
  }

  a {
    color: ${COLOR_WHITE};

    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 60%;
  margin: 70px auto;
`;

const Content = styled(Container)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const H2 = styled.h2`
  text-align: center;
`;

const H4 = styled.h4`
  text-align: center;
`;

const TeamsContent = styled(Container)`
  margin-top: 60px;
`;

function TeamsContainer() {
  const { isLoading, teams } = useSelector(state => state.teams);

  return (
    <Fragment>
      {isLoading ? (
        <FullSpinner isLoading={isLoading} />
      ) : teams.length === 0 ? (
        <Content>
          <H2>You need to create team* before start</H2>
          <H4>*team can have 1 member</H4>
          <ButtonWrapper>
            <Button big>
              <Link to="/user/teams/create">Create team</Link>
            </Button>
          </ButtonWrapper>
        </Content>
      ) : (
        <TeamsContent>
          <Row>
            <Col md="3">Search</Col>
            <Col md="9">
              <Row>
                {teams.map(team => (
                  <Team key={team._id} data={team} />
                ))}
              </Row>
            </Col>
          </Row>
        </TeamsContent>
      )}
    </Fragment>
  );
}

export default TeamsContainer;
