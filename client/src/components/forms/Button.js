import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 150px;
  padding: 12px 28px;
  margin: ${props => (props.margin ? props.margin : 0)}
  border: unset;
  background: ${props =>
    props.variant === 'primary'
      ? '#0099CC'
      : props.variant === 'secondary'
      ? '#fdd835'
      : props.variant === 'tertiary'
      ? '#e0e0e0'
      : 'transparent'}
  color: ${props =>
    props.variant === 'primary'
      ? '#fff'
      : props.variant === 'secondary' && props.variant === 'tertiary'
      ? '#121212'
      : '#fff'}
  border: ${props => (props.variant === 'inverted' ? '2px solid #fff' : 'none')}
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
`;

function Button({ value, type, variant, margin }) {
  return (
    <StyledButton margin={margin} variant={variant} type={type}>
      {value}
    </StyledButton>
  );
}

export default Button;
