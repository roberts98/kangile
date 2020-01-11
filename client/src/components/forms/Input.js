import React from 'react';
import styled from 'styled-components';

import { COLOR_DARK } from '../../contants/styles';

export const InputGroup = styled.div`
  margin-bottom: 13px;
`;

const StyledInput = styled.input`
  display: block;
  width: 300px;
  max-width: 100%;
  border-radius: 10px;
  padding: 8px 16px;
  border: 2px solid ${COLOR_DARK};
`;

function Input({ onChange, ...rest }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return <StyledInput onChange={handleChange} {...rest} />;
}

export default Input;
