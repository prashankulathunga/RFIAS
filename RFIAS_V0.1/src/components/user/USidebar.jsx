import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FcLeave } from "react-icons/fc";
import { IoDocumentsOutline } from "react-icons/io5";
import Udashboard from "./userdashboard.jsx";
import Research from "./research.jsx";
import Leave from "./userleave.jsx";
import Login from "../login/LoginForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const { Header, Sider, Content } = Layout;

function Structure() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="grid">
      <Header className="headbar" >
        <div className="logo" />
      </Header>
      <Layout style={{ marginTop: "64px" }}>
        <Sider
          theme="light"
          width={200}
          style={{ position: "fixed", left: 0, height: "100vh", top: "64px", transition: '0.3s', overflow: 'auto' }}
          collapsible
          collapsed={collapsed}
          onCollapse={toggleSidebar}
          className="sidebar"
        >
          <Menu mode="inline" theme="light" style={{ height: "100%", borderRight: 0 }}>
            <Menu.Item key="/" icon={<IoHome />}>
              <Link to="/" style={{ textDecoration: "none" }}>Profile</Link>
            </Menu.Item>
            <Menu.Item key="/research" icon={<IoDocumentsOutline />}>
              <Link to="/research" style={{ textDecoration: "none" }}>Research</Link>
            </Menu.Item>
            <Menu.Item key="/leave" icon={<FcLeave />}>
              <Link to="/leave" style={{ textDecoration: "none" }}>Leave</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: '0.3s' }}>
          <Content style={{ margin: "24px 16px", padding: 24, background: '#fff', minHeight: 280 }}>
            <RouterPath />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

function RouterPath() {
  return (
    <Routes>
      <Route path="/" element={<Udashboard />} />
      <Route path="/research" element={<Research />} />
      <Route path="/leave" element={<Leave />} />
    </Routes>
  );
}

export default Structure;
