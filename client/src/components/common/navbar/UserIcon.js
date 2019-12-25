import React from 'react';
import styled from 'styled-components';

import { COLOR_PRIMARY, COLOR_WHITE } from '../../../contants/styles';

const Wrapper = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${COLOR_PRIMARY};
  border-radius: 50%;
  color: ${COLOR_WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

function UserIcon({ char }) {
  return <Wrapper>{char}</Wrapper>;
}

export default UserIcon;
