import { Link as RRLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR_PRIMARY, COLOR_GRAPHITE } from '../../../contants/styles';

const Link = styled(RRLink)`
  color: ${COLOR_PRIMARY};

  &,
  &:hover {
    text-decoration: none;
  }

  &:hover {
    color: ${COLOR_GRAPHITE};
  }
`;

export default Link;
