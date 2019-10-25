import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function SmallSpinner({ isLoading }) {
  return <ClipLoader sizeUnit="px" size={30} loading={isLoading} />;
}
export default SmallSpinner;
