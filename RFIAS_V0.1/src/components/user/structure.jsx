import React, { useState } from "react";
import { Layout, Menu, Badge } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHome } from "react-icons/io";
import { FaUserTie, FaUserPlus, FaMarker, FaMoneyCheckAlt, FaWallet, FaCodePullRequest, FaCalendarAlt, FaCalendarWeek } from "react-icons/fa";
import { MdCoPresent, MdAssignmentAdd } from "react-icons/md";
import { BsChatSquareQuoteFill } from "react-icons/bs";

const { Header, Content, Sider } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#000",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#fff",
};

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#000",
  backgroundColor: "#fff",
};

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#000",
  backgroundColor: "#fff",
};

const footerStyle = {
  textAlign: "center",
  color: "#000",
  backgroundColor: "#fff",
};

const Structure = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigator = useNavigate();

  return (
    <>
      <Layout className="layout1">
        <Header className="header" style={headerStyle}>
          <div className="header-inner">
            <div className="ham-outer">
              <button>
                <GiHamburgerMenu onClick={() => setCollapsed(!collapsed)} />
              </button>
            </div>
            <h4>RFIAS</h4>
          </div>
        </Header>

        <Layout>
          <Sider
            className="sider-outer-user"
            collapsed={collapsed}
            width={255}
            style={siderStyle}
          >
            <Menu
              defaultSelectedKeys={["/"]}
              theme="light"
              mode="inline"
              className="menu-style"
              onClick={({ key }) => {
                navigator(key);
              }}
            >
              <Menu.Item key="/" icon={<IoHome />}>Home</Menu.Item>
              <Menu.SubMenu key="researchers" icon={<FaUserTie />} title="Researchers">
                <Menu.Item key="/addResearchers" icon={<FaUserPlus />}>Researcher Operations</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="attendance" icon={<MdCoPresent />} title="Attendance">
                <Menu.Item key="/addAttendance" icon={<FaMarker />}>Attendance Operations</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="report" icon={<MdCoPresent />} title="Reports">
                <Menu.Item key="/addReport" icon={<MdAssignmentAdd />}>Report Operations</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="salary" icon={<FaMoneyCheckAlt />} title="Salary">
                <Menu.Item key="/addSalary" icon={<FaWallet />}>Salary Operations</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="leaveRequest" icon={<Badge count={9} size="small"><FaCodePullRequest /></Badge>} title="Leave Requests">
                <Menu.Item key="/leaveRequest" icon={<BsChatSquareQuoteFill />}>Request Operations</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="calender" icon={<FaCalendarAlt />} title="Calendar">
                <Menu.Item key="/calender" icon={<FaCalendarWeek />}>Events</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>

          <Content style={contentStyle}>
            <Routinguser />
          </Content>
          <Layout.Footer style={footerStyle}></Layout.Footer>
        </Layout>
      </Layout>
    </>
  );
}

const Routinguser = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<div>Home Component</div>} />
      </Routes>
    </>
  );
};

export default Structure;
