import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { logout } from '../../../actions/auth';
import H1 from '../../headers/H1';
import Button from '../../forms/Button';
import StyledLink from '../../links/Link';

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 92px;
  padding: 25px 0;
`;

function Navbar({ color }) {
  const isAuthenticated = useSelector(state => state.auth.user.token);
  const dispatch = useDispatch();

  function handleClick() {
    if (isAuthenticated) {
      dispatch(logout());
    }
  }

  return (
    <Wrapper>
      <Container>
        <Inner>
          <StyledLink to="/">
            <H1 color={color} title="KANGILE" />
          </StyledLink>
          <StyledLink
            onClick={handleClick}
            to={isAuthenticated ? '/logout' : '/login'}
          >
            <Button
              value={isAuthenticated ? 'Log out' : 'Login'}
              variant="inverted"
            />
          </StyledLink>
        </Inner>
      </Container>
    </Wrapper>
  );
}

export default Navbar;
