import { Link as RRLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RRLink)`
  &,
  &:hover {
    text-decoration: none;
  }
`;

export default Link;
