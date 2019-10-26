import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    width: 540px;
  }

  @media screen and (min-width: 768px) {
    width: 720px;
  }

  @media screen and (min-width: 992px) {
    width: 960px;
  }

  @media screen and (min-width: 1200px) {
    width: 1140px;
  }
`;

function Container({ children, className }) {
  return <StyledContainer className={className}>{children}</StyledContainer>;
}

export const H100Container = styled(Container)`
  height: 100%;
`;

export default Container;
