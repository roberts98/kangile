import React from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin: 0;
  color: ${props =>
    props.color === 'white'
      ? '#fff'
      : props.color === 'blue'
      ? '#0099cc'
      : '#121212'};
  text-align: ${props => (props.align ? 'center' : 'left')};
`;

function H4({ title, color, className, align }) {
  return (
    <StyledH4 className={className} align={align} color={color}>
      {title}
    </StyledH4>
  );
}

export default H4;
