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
    FaCalendarAlt,
    FaCalendarWeek,
    FaMarker,
    FaMoneyCheckAlt,
    FaUserPlus,
    FaUserTie,
    FaWallet
} from "react-icons/fa";
import {MdAssignmentAdd, MdCoPresent, MdOutlineAddCard, MdOutlineUpdate} from "react-icons/md";
import React, {useState} from "react";
import {TbReportSearch} from "react-icons/tb";
import {LuWalletCards} from "react-icons/lu";
import {GiHamburgerMenu} from "react-icons/gi";
import Home from "./components/home.jsx";
import {BsChatSquareQuoteFill, BsJustifyRight} from "react-icons/bs";
import {FaCodePullRequest} from "react-icons/fa6";
import Attendance from "./components/attendance.jsx";
import Report from "./components/reports.jsx";
import Salary from "./components/salary.jsx";
import EventCalendar from "./components/eventCalendar.jsx";
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
                                    key: 'researchers',
                                    icon: <FaUserTie />,
                                    children: [
                                        {
                                            label: 'Researcher Operations',
                                            key: '/addResearchers',
                                            icon: <FaUserPlus/>,
                                        },

                                    ]
                                },
                                {
                                    label: 'Attendance',
                                    key: 'attendance',
                                    icon: <MdCoPresent />,
                                    children:[
                                        {
                                            label: 'Attendance Operations',
                                            key: '/addAttendance',
                                            icon: <FaMarker />,
                                        },
                                    ]
                                },
                                {
                                    label: 'Reports',
                                    key: 'report',
                                    icon: <TbReportSearch />,
                                    children:[
                                        {
                                            label: 'Report Operations',
                                            key: '/addReport',
                                            icon: <MdAssignmentAdd  />,
                                        },
                                    ]
                                },
                                {
                                    label: 'Salary',
                                    key: 'salary',
                                    icon: <FaMoneyCheckAlt />,
                                    children: [
                                        {
                                            label: 'Salary Operations',
                                            key: '/addSalary',
                                            icon: <FaWallet   />,
                                        },
                                    ]
                                },
                                {
                                    label: 'Leave Requests',
                                    key: 'leaveRequest',
                                    icon: <Badge count={9} size="small"> <FaCodePullRequest/> </Badge>,
                                    children: [
                                        {
                                            label: 'Request Operations',
                                            key: '/leaveRequest',
                                            icon: <BsChatSquareQuoteFill />,
                                        },

                                    ]
                                },
                                // {
                                //     label: 'Calender',
                                //     key: 'calender',
                                //     icon: <FaCalendarAlt />,
                                //     children: [
                                //         {
                                //             label: 'Events',
                                //             key: '/calender',
                                //             icon: <FaCalendarWeek />,
                                //         },
                                //
                                //     ]
                                // },


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
