import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(RRLink)`
  &,
  &:hover {
    text-decoration: none;
  }
`;

function Link({ children, to, onClick }) {
  return (
    <StyledLink onClick={onClick} to={to}>
      {children}
    </StyledLink>
  );
}

export default Link;
