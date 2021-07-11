import React from 'react';
import { Layout } from 'antd';

import './Footer.scss';

function Footer() {
  const { Footer } = Layout;
  return (
    <Footer className='footer'>
      <p>Movie APP</p>
    </Footer>
  );
}

export default Footer;