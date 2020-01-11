import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RRLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { logout } from '../../../actions/auth';
import { COLOR_PRIMARY } from '../../../contants/styles';
import { H1 } from '../../styled/headings';
import { Link } from '../../links';
import { UserIcon } from './';
import plus from '../../../assets/blue_plus.svg';
import home from '../../../assets/home.svg';

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 92px;
  padding: 25px 0;
  border-bottom: 2px solid ${COLOR_PRIMARY};
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(RRLink)`
  display: block;
  width: 35px;
  height: 35px;
  background-image: url(${props => props.bg});
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 70px;
`;

function NavbarUser() {
  const isAuthenticated = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  function handleClick() {
    if (isAuthenticated) {
      dispatch(logout());
    }
  }

  return (
    <Container>
      <Inner>
        <Link to="/">
          <H1 color={COLOR_PRIMARY}>KANGILE</H1>
        </Link>
        <Right>
          <Icon to="/user/teams/create" bg={plus} />
          <Icon to="/" bg={home} />
          <UserIcon handleClick={handleClick} char="R" />
        </Right>
      </Inner>
    </Container>
  );
}

export default NavbarUser;
