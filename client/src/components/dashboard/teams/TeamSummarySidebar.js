import React from 'react';
import styled from 'styled-components';
import {
  FONT_HUGE,
  FONT_BIG,
  XXS_SPACING,
  MEDIUM_SPACING
} from '../../../contants/styles';

const Name = styled.h1`
  font-size: ${FONT_HUGE};
  margin-bottom: ${MEDIUM_SPACING};
`;

const Heading = styled.h2`
  font-size: ${FONT_BIG};
  font-weight: 700;
  margin-bottom: ${XXS_SPACING};
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

function TeamSummarySidebar({ team }) {
  return (
    <div>
      <Name>{team.name}</Name>
      <Heading>Description</Heading>
      <p>{team.description}</p>
      <Heading>Memebrs</Heading>
      <List>
        {team.members.map(member => (
          <li key={member._id}>{member.username}</li>
        ))}
      </List>
    </div>
  );
}

export default TeamSummarySidebar;
