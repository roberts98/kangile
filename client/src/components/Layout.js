import React from 'react';
import styled from 'styled-components';

import Navbar from './common/Navbar';
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
      {withNavbar && <Navbar />}
      <Main blue={blue}>{children}</Main>
      <Footer />
    </PageWrapper>
  );
}

export default Layout;
