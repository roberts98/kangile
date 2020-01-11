import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  margin: 0;
  color: ${({ color }) => color};
`;

export default H1;
