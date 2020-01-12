import styled from 'styled-components';

import {
  COLOR_PRIMARY,
  COLOR_WHITE,
  FONT_BIG,
  FONT_SMALL,
  XXS_SPACING,
  XS_SPACING
} from '../../../contants/styles';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR_PRIMARY};
  color: ${COLOR_WHITE};
  font-size: ${props => (props.big ? FONT_BIG : FONT_SMALL)};
  font-weight: 700;
  text-align: center;
  padding: ${XXS_SPACING} ${XS_SPACING};
  border-radius: 10px;
  border: 2px solid transparent;
  text-transform: uppercase;
  width: ${({ wide }) => wide && '100%'};

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    background: transparent;
    color: ${COLOR_PRIMARY};
    border: 2px solid ${COLOR_PRIMARY};

    a {
      color: ${COLOR_PRIMARY};
    }
  }

  a {
    color: ${COLOR_WHITE};

    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
    }
  }
`;

export default Button;
