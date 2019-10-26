import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getTeams } from '../../../actions/teams';
import { H100Container } from '../../grid/Container';
import { H100Row } from '../../grid/Row';
import H1 from '../../headers/H1';
import H4 from '../../headers/H4';
import Button from '../../forms/Button';
import Link from '../../links/Link';
import Team from './Team';
import FullSpinner from '../../spinners/FullSpinner';

const StyledDiv = styled.div`
  display: flex;
  margin-top: 15px;
`;

function TeamsContainer() {
  const { isLoading, teams } = useSelector(state => state.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <Fragment>
      {isLoading ? (
        <FullSpinner isLoading={isLoading} />
      ) : teams.length === 0 ? (
        <H100Container>
          <H100Row center column>
            <H1 title="You need to create team* before start" />
            <H4 title="* team can have 1 member" />
            <Link to="/users/teams/create">
              <Button
                margin="20px 0 0 0"
                type="button"
                value="Create team"
                variant="primary"
              />
            </Link>
          </H100Row>
        </H100Container>
      ) : (
        <StyledDiv>
          {teams.map(team => (
            <Team key={team._id} data={team} />
          ))}
        </StyledDiv>
      )}
    </Fragment>
  );
}

export default TeamsContainer;
