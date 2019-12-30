import React from 'react';
import styled from 'styled-components';

import { COLOR_PRIMARY } from '../contants/styles';
import Navbar from './common/navbar/NavbarUser';
import Header from './common/LoadingBar';

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

function Layout({ children, withNavbar, blue }) {
  return (
    <PageWrapper>
      <Header />
      {withNavbar && <Navbar color={COLOR_PRIMARY} />}
      <Main blue={blue}>{children}</Main>
    </PageWrapper>
  );
}

export default Layout;
