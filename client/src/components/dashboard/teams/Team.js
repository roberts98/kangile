import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import { H2 } from '../../styled/headings';
import {
  COLOR_LIGHT,
  COLOR_DARK,
  COLOR_PRIMARY,
  COLOR_GRAPHITE
} from '../../../contants/styles';
import { Button, InputGroup } from '../../forms';
import avatar from '../../../assets/avatar.png';

const Content = styled.div`
  min-height: 400px;
  background: ${COLOR_LIGHT};
  margin-right: 15px;
  border-radius: 15px;
  padding: 20px;
`;

const StyledH2 = styled(H2)`
  color: ${COLOR_DARK};
  font-weight: 500;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  font-size: 18px;
  color: ${COLOR_DARK};
  padding-left: 0;
`;

const Heading = styled.h3`
  position: relative;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 15px;

  &::after {
    content: '';
    width: 24px;
    height: 2px;
    background-color: ${COLOR_PRIMARY};
    position: absolute;
    left: 0;
    bottom: -5px;
  }
`;

const Username = styled.span`
  margin-left: 10px;
`;

const Description = styled.p`
  font-size: 12px;
  color: ${COLOR_GRAPHITE};
`;

function Team({ data }) {
  return (
    <Col md="4">
      <Content>
        <StyledH2 color="white" align="center" title={data.name} />
        <Heading>Description</Heading>
        <Description>{data.description}</Description>
        <Heading>Members</Heading>
        <List>
          {data.members.map(member => (
            <li key={member._id}>
              <img src={avatar} alt="avatar" />
              <Username>{member.username}</Username>
            </li>
          ))}
        </List>
        <InputGroup>
          <Button wide>
            <Link to={`/user/teams/${data._id}`}>See tasks</Link>
          </Button>
        </InputGroup>
        <InputGroup>
          <Button wide>
            <Link to={`/user/chat/${data._id}`}>Chat</Link>
          </Button>
        </InputGroup>
      </Content>
    </Col>
  );
}

export default Team;
