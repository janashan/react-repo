import React from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import './MenuTop.scss';

export default function MenuTop() {
  return (
    <div className="menu-top">
      
      <Menu theme="dark"
            mode="horizontal"
            defaultSelectedKeys={ ['1'] }
            style={ { lineHeight: "64px" } }>
       
       <Menu.Item key="1">
          <Link to="/">Popular Movies</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/upcoming">Up Coming Movies</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/top-rated">Top Rated Movies</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/search">Search</Link>
        </Menu.Item>
        
      </Menu>
    </div>
  );
}

