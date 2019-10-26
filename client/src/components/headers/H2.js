import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 34px;
  font-weight: 700;
  line-height: 44px;
  margin: 0;
  color: ${props =>
    props.color === 'white'
      ? '#fff'
      : props.color === 'blue'
      ? '#0099cc'
      : '#121212'};
  text-align: ${props => (props.align ? 'center' : 'left')};
`;

function H2({ title, color, className, align }) {
  return (
    <StyledH2 className={className} align={align} color={color}>
      {title}
    </StyledH2>
  );
}

export default H2;
