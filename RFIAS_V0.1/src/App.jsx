import Udashboard from "./components/user/userdashboard.jsx";
import Attendance from "./components/attendance.jsx";
import Employee from "./components/employee.jsx";
import Report from "./components/reports.jsx";
import Signup from "./components/login/signup.jsx";


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Clock from "./components/cards/clock.jsx";
import Employee from './components/employee.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, useNavigate, NavLink,} from "react-router-dom";
import {Badge, Layout, Menu} from 'antd';
import {Content, Header} from "antd/es/layout/layout.js";
import Sider from "antd/es/layout/Sider.js";
import './components/styles/dashboard.css'
import {IoHome} from "react-icons/io5";
import {
    FaMarker,
    FaMoneyCheckAlt,
    FaUserPlus,
    FaUserTie,
    FaWallet
} from "react-icons/fa";
import {MdAssignmentAdd, MdCoPresent, MdOutlineAddCard, MdOutlineUpdate} from "react-icons/md";
import React, {useState} from "react";
import {TbReportSearch} from "react-icons/tb";
import Home from "./components/home.jsx";
import {BsChatSquareQuoteFill, BsJustifyRight} from "react-icons/bs";
import {FaCodePullRequest} from "react-icons/fa6";
import Attendance from "./components/attendance.jsx";
import Report from "./components/reports.jsx";
import Salary from "./components/salary.jsx";
import LeavRequest from "./components/leavRequest.jsx";
import {GrTextAlignRight} from "react-icons/gr";

function Dashboard() {

    const [collpased, setCollpased] = useState(true);
    const navigator = useNavigate();

    return (
        <>
            <Layout className='layout-outer'>
                <Header className='header-outer'>
                    <div className="header-inner">

                        <div className="ham-outer">
                            <button>
                                <GrTextAlignRight   onClick={()=>{setCollpased(!collpased)}} />
                            </button>

                        </div>

                        <h4>RFIAS</h4>
                    </div>
                </Header>
                <Layout>
                    <Sider className='sider-outer'
                        collapsed={collpased} theme='light' width={250}>

                        <Menu defaultSelectedKeys='/'
                              theme='light' mode='inline' className='menu-style'
                            onClick={({key})=>{
                            navigator(key);
                        }}

                            items={[
                                {
                                    label: 'Home',
                                    key: '/',
                                    icon: <IoHome/>,
                                },
                                {
                                    label: 'Researchers',
                                    key: '/addResearchers',
                                    icon: <FaUserTie />,
                                    // children: [
                                    //     {
                                    //         label: 'Researcher Operations',
                                    //         key: '/addResearchers',
                                    //         icon: <FaUserPlus/>,
                                    //     },
                                    //
                                    // ]
                                },
                                {
                                    label: 'Attendance',
                                    key: '/addAttendance',
                                    icon: <FaMarker />,
                                    // children:[
                                    //     {
                                    //         label: 'Attendance Operations',
                                    //         key: '/addAttendance',
                                    //         icon: <FaMarker />,
                                    //     },
                                    // ]
                                },
                                {
                                    label: 'Reports',
                                    key: '/addReport',
                                    icon: <MdAssignmentAdd />,
                                    // children:[
                                    //     {
                                    //         label: 'Report Operations',
                                    //         key: '/addReport',
                                    //         icon: <MdAssignmentAdd  />,
                                    //     },
                                    // ]
                                },
                                {
                                    label: 'Salary',
                                    key: '/addSalary',
                                    icon: <FaWallet />,
                                    // children: [
                                    //     {
                                    //         label: 'Salary Operations',
                                    //         key: '/addSalary',
                                    //         icon: <FaWallet   />,
                                    //     },
                                    // ]
                                },
                                {
                                    label: 'Leave Requests',
                                    key: '/leaveRequest',
                                    icon: <Badge count={9} size="small"> <FaCodePullRequest/> </Badge>,
                                    // children: [
                                    //     {
                                    //         label: 'Request Operations',
                                    //         key: '/leaveRequest',
                                    //         icon: <BsChatSquareQuoteFill />,
                                    //     },
                                    //
                                    // ]
                                }
                            ]}/>


                    </Sider>
                    <Content className='content-outer'>

                        <RoutingPath/>

                    </Content>
                </Layout>
            </Layout>


        </>
    );

  return (
    <>
      <Router>
        <div className="nav-outer">
          <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary navbar-light">
            <div className="container-fluid">
              {/*<Link to='/home' className="navbar-brand logo-outer">
                                <img
                                  //  src="https://static.vecteezy.com/system/resources/previews/004/996/073/original/face-recognition-and-identification-line-icon-face-id-line-icon-facial-scan-and-identification-facial-recognition-system-sign-biometric-facial-detection-pictogram-illustration-vector.jpg"
                                    alt="logo"/>
                            </Link>*/}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="navbar-text nav-link active"
                      aria-current="page"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/employee" className="nav-link">
                      Researcher
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/attendance" className="nav-link">
                      Attendance
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/salary" className="nav-link">
                      Salary
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/report" className="nav-link">
                      Report
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="clock-outer">
              <div className="container">
                <Clock />
                <hr />
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Udashboard />}></Route>
          <Route path="/attendance" element={<Attendance />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/salary" element={<Salary />}></Route>
          <Route path="/report" element={<Report />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          
        </Routes>
      </Router>
    </>
  );
}

function RoutingPath (){
    return (
        <>
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/addResearchers'} element={<Employee/>}></Route>
            <Route path={'/addAttendance'} element={<Attendance/>}></Route>
            <Route path={'/addReport'} element={<Report/>}></Route>
            <Route path={'/addSalary'} element={<Salary/>}></Route>
            <Route path={'/leaveRequest'} element={<LeavRequest/>}></Route>
        </Routes>

        </>
    );
}



export default Dashboard;
