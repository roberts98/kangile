import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  width: 300px;
  height: 40px;
  padding-left: 10px;
  margin-bottom: 10px;
`;

function Input({ placeholder, type, onChange, value }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <StyledInput
      onChange={handleChange}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
