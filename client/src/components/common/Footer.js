import React from 'react';
import styled from 'styled-components';

import H1 from '../headers/H1';
import Container from '../grid/Container';
import StyledLink from '../links/Link';

const Wrapper = styled.div`
  height: 80px
  background: #e0e0e0;
  display: flex;
  align-items: center;
`;

function Footer() {
  return (
    <Wrapper>
      <Container>
        <StyledLink to="/">
          <H1 title="KANGILE" color="blue" />
        </StyledLink>
      </Container>
    </Wrapper>
  );
}

export default Footer;
