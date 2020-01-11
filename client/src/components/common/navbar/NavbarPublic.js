import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import H1 from '../../headers/H1';
import StyledLink from '../../links/Link';
import { COLOR_WHITE, COLOR_PRIMARY } from '../../../contants/styles';

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 92px;
  padding: 25px 0;
  border-bottom: ${({ isHomePage }) =>
    !isHomePage && `2px solid ${COLOR_PRIMARY}`};

  a {
    color: ${({ isHomePage }) => (isHomePage ? COLOR_WHITE : COLOR_PRIMARY)};
  }
`;

function Navbar({ isHomePage }) {
  return (
    <Wrapper>
      <Container>
        <Inner isHomePage={isHomePage}>
          <StyledLink to="/">
            <H1 title="KANGILE" />
          </StyledLink>
          <StyledLink to="/login">Log In</StyledLink>
        </Inner>
      </Container>
    </Wrapper>
  );
}

export default Navbar;
