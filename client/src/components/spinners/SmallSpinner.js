import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function SmallSpinner({ isLoading, color, size = 30 }) {
  return (
    <ClipLoader color={color} sizeUnit="px" size={size} loading={isLoading} />
  );
}
export default SmallSpinner;
