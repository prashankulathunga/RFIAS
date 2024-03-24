
import Attendance from "./components/attendance.jsx";
import Employee from "./components/employee.jsx";
import Report from "./components/reports.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< Updated upstream
import {Routes, Route, useNavigate } from "react-router-dom";
=======
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Clock from "./components/cards/clock.jsx";
>>>>>>> Stashed changes
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge, Layout, Menu} from 'antd';
import {Content, Header} from "antd/es/layout/layout.js";
import Sider from "antd/es/layout/Sider.js";
import './components/styles/dashboard.css'
import {IoHome} from "react-icons/io5";
import {
    FaMarker,
    FaUserTie,
    FaWallet
} from "react-icons/fa";
import {MdAssignmentAdd, MdCoPresent, MdOutlineAddCard, MdOutlineUpdate} from "react-icons/md";
import React, {useState} from "react";
import {TbReportSearch} from "react-icons/tb";
import Home from "./components/home.jsx";
import {BsChatSquareQuoteFill, BsJustifyRight} from "react-icons/bs";
import {FaCodePullRequest} from "react-icons/fa6";
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
