import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

import { COLOR_PRIMARY } from '../../../contants/styles';

function Bar() {
  return (
    <LoadingBar
      style={{ backgroundColor: COLOR_PRIMARY }}
      showFastActions
      progressIncrease={40}
    />
  );
}

export default Bar;
