import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { XL_SPACING, SMALL_SPACING, lg } from '../../../contants/styles';

const TopSpacer = styled(Container)`
  margin-top: ${SMALL_SPACING};

  @media ${lg} {
    margin-top: ${XL_SPACING};
  }
`;

export default TopSpacer;
