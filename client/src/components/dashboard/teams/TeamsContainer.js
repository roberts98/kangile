import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { teamsSelector } from '../../../selectors/teams';
import { Team, SearchForm } from './';
import { Button, InputGroup } from '../../styled/forms';
import { Center } from '../../styled/common';
import {
  BIG_SPACING,
  XXL_SPACING,
  SMALL_SPACING,
  md
} from '../../../contants/styles';

const ButtonWrapper = styled.div`
  margin-top: ${BIG_SPACING};

  button {
    margin: 0 auto;
  }
`;

const H2 = styled.h2`
  text-align: center;
`;

const H4 = styled.h4`
  text-align: center;
`;

const TeamsContent = styled(Container)`
  margin-top: ${SMALL_SPACING};

  @media ${md} {
    margin-top: ${XXL_SPACING};
  }
`;

function TeamsContainer() {
  const { searchTerm } = useSelector(state => state.filters);
  const teams = teamsSelector(useSelector(state => state));

  return (
    <Fragment>
      {teams.length === 0 && !searchTerm ? (
        <Container>
          <Center>
            <H2>You need to create team* before start</H2>
            <H4>*team can have 1 member</H4>
            <ButtonWrapper>
              <Button big>
                <Link to="/user/teams/create">Create team</Link>
              </Button>
            </ButtonWrapper>
          </Center>
        </Container>
      ) : (
        <TeamsContent>
          <Row>
            <Col md="3">
              <InputGroup>
                <SearchForm />
              </InputGroup>
            </Col>
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
