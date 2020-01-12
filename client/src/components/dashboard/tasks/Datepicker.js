import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  COLOR_DARK,
  XXS_SPACING,
  SMALL_SPACING
} from '../../../contants/styles';

const Styled = styled(DatePicker)`
  display: block;
  width: 300px;
  border-radius: 10px;
  padding: ${XXS_SPACING} ${SMALL_SPACING};
  border: 2px solid ${COLOR_DARK};
`;

function Datepicker({ value, handleChange }) {
  return (
    <Styled
      selected={value}
      onChange={date => handleChange(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="MMMM d, yyyy H:mm "
    />
  );
}

export default Datepicker;
