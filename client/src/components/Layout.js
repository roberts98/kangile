import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { NavbarPublic, NavbarUser, LoadingBar } from './common/navbar';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Main = styled.div`
  background: ${props => (props.blue ? '#0099cc' : '#fff')};
  flex-grow: 1;
`;

function Layout({ children, blue }) {
  const { token } = useSelector(state => state.auth);
  return (
    <PageWrapper>
      <LoadingBar />
      {token ? <NavbarUser /> : <NavbarPublic />}
      <Main blue={blue}>{children}</Main>
    </PageWrapper>
  );
}

export default Layout;
