import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  margin: 0;
  color: ${props => props.color};
  text-align: ${props => (props.align ? 'center' : 'left')};
`;

function H1({ title, color, className, align }) {
  return (
    <StyledH1 className={className} align={align} color={color}>
      {title}
    </StyledH1>
  );
}

export default H1;
