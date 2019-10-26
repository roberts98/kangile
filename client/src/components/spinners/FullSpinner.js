import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

const StyledDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function FullSpinner({ isLoading }) {
  return (
    <StyledDiv>
      <ClipLoader sizeUnit="px" size={30} loading={isLoading} />
    </StyledDiv>
  );
}
export default FullSpinner;
