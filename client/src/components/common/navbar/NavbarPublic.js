import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { H1 } from '../../styled/headings';
import { Link } from '../../styled/links';
import {
  COLOR_WHITE,
  COLOR_PRIMARY,
  MEDIUM_SPACING
} from '../../../contants/styles';

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 92px;
  padding: ${MEDIUM_SPACING} 0;
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
          <Link to="/">
            <H1>KANGILE</H1>
          </Link>
          <Link to="/login">Log In</Link>
        </Inner>
      </Container>
    </Wrapper>
  );
}

export default Navbar;
