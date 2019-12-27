import React from 'react';
import styled from 'styled-components';

import { COLOR_DARK } from '../../contants/styles';

const StyledInput = styled.input`
  display: block;
  width: 300px;
  border-radius: 10px;
  padding: 8px 16px;
  border: 2px solid ${COLOR_DARK};
`;

function Input({ placeholder, type, onChange, value, className, disabled }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <StyledInput
      disabled={disabled}
      onChange={handleChange}
      className={className}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
