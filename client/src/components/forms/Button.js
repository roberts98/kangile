import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  min-width: 150px;
  padding: 12px 28px;
  border: unset;
  background: ${props =>
    props.variant === 'primary'
      ? '#0099CC'
      : props.variant === 'secondary'
      ? '#fdd835'
      : '#e0e0e0 '}
  color: ${props =>
    props.variant === 'primary'
      ? '#fff'
      : props.variant === 'secondary'
      ? '#121212'
      : '#121212'}
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
`;

function Button({ value, type, variant }) {
  return (
    <StyledButton variant={variant} type={type}>
      {value}
    </StyledButton>
  );
}

export default Button;
