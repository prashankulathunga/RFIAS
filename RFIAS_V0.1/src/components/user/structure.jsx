import React from 'react';
import "./allcss.css"
import { Layout, Flex } from 'antd';
import Sidebar from './sidebar';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#000', // Changed text color to black
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#fff', // Set background color to white
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#000', // Changed text color to black
  backgroundColor: '#fff', // Set background color to white
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#000', // Changed text color to black
  backgroundColor: '#fff', // Set background color to white
};
const footerStyle = {
  textAlign: 'center',
  color: '#000', // Changed text color to black
  backgroundColor: '#fff', // Set background color to white
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
  backgroundColor: '#fff', // Set background color to white
};
const Structure = () => (
  
    <Layout className='layout1'>
      <Sider width={255} style={siderStyle}>
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header"style={headerStyle}>Dashboard</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer> 
      </Layout>
    </Layout>
 
);
export default Structure;
