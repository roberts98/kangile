import React from 'react';
import styled from 'styled-components';

import H2 from '../../headers/H2';

const StyledDiv = styled.div`
  width: 300px;
  height: 400px;
  background: rgba(0, 153, 204, 0.8);
  cursor: pointer;
  margin-right: 15px;
`;

const StyledH2 = styled(H2)`
  border-bottom: 2px solid #fff;
  padding-bottom: 5px;
  font-weight: 300;
`;

const List = styled.ul`
  list-style: none;
  font-size: 18px;
  color: #fff;
`;

function Team({ data }) {
  return (
    <StyledDiv>
      <StyledH2 color="white" align="center" title={data.name} />
      <List>
        {data.members.map(member => (
          <li key={member._id}>{member.username}</li>
        ))}
      </List>
    </StyledDiv>
  );
}

export default Team;
