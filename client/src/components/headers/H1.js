import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,500&display=swap');
  font-family: 'Ubuntu', Arial, sans-serif;
  font-size: 48px;
  font-weight: 300;
  line-height: 60px;
  color: #121212;
  margin-bottom: 40px;
`;

function H1({ title }) {
  return <StyledH1>{title}</StyledH1>;
}

export default H1;
