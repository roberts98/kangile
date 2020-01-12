import styled from 'styled-components';

import {
  COLOR_DARK,
  SMALL_SPACING,
  XXS_SPACING
} from '../../../contants/styles';

export const InputGroup = styled.div`
  margin-bottom: ${SMALL_SPACING};
`;

const Input = styled.input`
  display: block;
  width: 300px;
  max-width: 100%;
  border-radius: 10px;
  padding: ${XXS_SPACING} ${SMALL_SPACING};
  border: 2px solid ${COLOR_DARK};
`;

export default Input;
