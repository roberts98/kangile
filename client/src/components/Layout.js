import React from 'react';
import styled from 'styled-components';

import { COLOR_PRIMARY } from '../contants/styles';
import Navbar from './common/navbar/NavbarUser';
import Footer from './common/Footer';

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
      {withNavbar && <Navbar color={COLOR_PRIMARY} />}
      <Main blue={blue}>{children}</Main>
      <Footer />
    </PageWrapper>
  );
}

export default Layout;
