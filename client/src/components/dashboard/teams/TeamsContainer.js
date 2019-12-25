import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import Team from './Team';
import FullSpinner from '../../spinners/FullSpinner';
import { COLOR_PRIMARY, COLOR_WHITE } from '../../../contants/styles';

const Button = styled(Link)`
  display: block;
  width: 60%;
  margin: 70px auto;
  background-color: ${COLOR_PRIMARY};
  color: ${COLOR_WHITE};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding: 10px 0;
  border-radius: 10px;
  border: 5px solid transparent;
  text-transform: uppercase;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    background: transparent;
    color: ${COLOR_PRIMARY};
    border: 5px solid ${COLOR_PRIMARY};
  }
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
          <Button to="/user/teams/create">Create team</Button>
        </Content>
      ) : (
        <div>
          {teams.map(team => (
            <Team key={team._id} data={team} />
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default TeamsContainer;
