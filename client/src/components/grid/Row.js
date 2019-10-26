import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  align-items: ${props => (props.center ? 'center' : 'flex-start')}
  justify-content: ${props => (props.center ? 'center' : 'flex-start')}
  flex-direction: ${props => (props.column ? 'column' : 'row')}
`;

function Row({ children, center, className, column }) {
  return (
    <StyledRow className={className} column={column} center={center}>
      {children}
    </StyledRow>
  );
}

export const H100Row = styled(Row)`
  height: 100%;
`;

export default Row;
