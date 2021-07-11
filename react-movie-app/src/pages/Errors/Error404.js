import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Result } from "antd";

export default function Error404() {
return ReactDOM.render(
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" href='/'>Back Home</Button>}
  />,
  document.getElementById('root'))
}