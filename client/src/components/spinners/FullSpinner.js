import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Center } from '../styled/common';

function FullSpinner({ isLoading }) {
  return (
    <Center>
      <ClipLoader sizeUnit="px" size={30} loading={isLoading} />
    </Center>
  );
}
export default FullSpinner;
