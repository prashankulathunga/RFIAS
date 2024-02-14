import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  LoginOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '1', <LinkOutlined />),
  getItem('Research report', '2', <MailOutlined />),
  getItem('Apply Leave', '2', <AppstoreOutlined />),
  getItem('Calander', '4', <CalendarOutlined />),
  getItem('Log Out', '5', <LoginOutlined />),


];
const App = () => {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  return (
    <>
      
     
      <Menu
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  );
};
export default App;