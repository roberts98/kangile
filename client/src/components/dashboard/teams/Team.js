import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import { H2 } from '../../styled/headings';
import {
  COLOR_LIGHT,
  COLOR_DARK,
  COLOR_PRIMARY,
  COLOR_GRAPHITE,
  SMALL_SPACING,
  FONT_DEFAULT,
  XS_SPACING,
  FONT_SMALL,
  FONT_HUGE
} from '../../../contants/styles';
import { Button, InputGroup } from '../../styled/forms';
import avatar from '../../../assets/avatar.png';

const Content = styled.div`
  min-height: 400px;
  background: ${COLOR_LIGHT};
  margin-right: ${SMALL_SPACING};
  margin-bottom: ${SMALL_SPACING};
  border-radius: 15px;
  padding: ${SMALL_SPACING};
`;

const StyledH2 = styled(H2)`
  color: ${COLOR_DARK};
  font-weight: 500;
  margin-bottom: ${SMALL_SPACING};
  text-align: center;
  font-size: ${FONT_HUGE};
`;

const List = styled.ul`
  list-style: none;
  font-size: ${FONT_DEFAULT};
  color: ${COLOR_DARK};
  padding-left: 0;
`;

const Heading = styled.h3`
  position: relative;
  font-size: ${FONT_DEFAULT};
  font-weight: 700;
  margin-bottom: ${SMALL_SPACING};

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
  margin-left: ${XS_SPACING};
`;

const Description = styled.p`
  font-size: ${FONT_SMALL};
  color: ${COLOR_GRAPHITE};
`;

function Team({ data }) {
  return (
    <Col sm="6" lg="4">
      <Content>
        <StyledH2>{data.name}</StyledH2>
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
