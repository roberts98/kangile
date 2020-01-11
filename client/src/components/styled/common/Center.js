import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function Center({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Center;
