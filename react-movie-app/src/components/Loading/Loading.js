import React from 'react';
import { Spin } from 'antd';

import './Loading.scss';

function Loading() {
  return (
    <div className="loading">
      <Spin size="large"/>
    </div>
  );
}

export default Loading;