import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { logout } from '../../actions/auth';
import Container from '../grid/Container';
import H1 from '../headers/H1';
import Button from '../forms/Button';
import StyledLink from '../links/Link';

const Wrapper = styled.div`
  background: #0099cc;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 46px;
  padding: 25px 0;
`;

function Navbar() {
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
            <H1 color="white" title="KANGILE" />
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
