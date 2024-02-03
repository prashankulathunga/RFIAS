import DefaultCard from "./cards/defaultCard.jsx";
import DefaultChart from "./cards/defaultChart.jsx";
import LeaveRequestCard from "./cards/leaveRequestCard.jsx";
import Clock from "./cards/clock.jsx";
import {Avatar} from "@mui/material";

const cardData = [
    {
        count: '34',
        title: 'Total Employee'
    },
    {
        count: '23',
        title: 'On Time'
    },
    {
        count: '06',
        title: 'Late'
    },
    {
        count: '05',
        title: 'Absent'
    }
];

const leaveReqData = [
    {
        username: 'Anuja Nimsara',
        message: 'Ada mata niwaduwak denn hode'
    },
    {
        username: 'Dulantha Ranaweera',
        message: 'Mata ada enna wenne ne ane'
    },
    {
        username: 'Charuka Dilshan',
        message: 'Mata ada asaneepai give me leave please'
    },
    {
        username: 'Prashan Kulathunga',
        message: 'Mata niwadu oni ada'
    },
    {
        username: 'Nisakanthi',
        message: 'Mata enna wenne ne mata hodatama una halo'
    },
];

function Home() {

    return (
        <>
            <div className="container">
                <br/>
                <div className="row">
                    {
                        cardData.map((data, index) => {
                            return (
                                <DefaultCard count={data.count} title={data.title} key={index + 1}/>
                            );
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <div className="chart-text">
                            <h4>Attendance Progress</h4>

                        </div>
                        <div className="chart-outer">
                            <DefaultChart/>
                        </div>
                    </div>

                    <div className="col-12 col-lg-5">
                        <div className="chart-text">
                            <h4>Leave Requests</h4>
                        </div>
                        <div className="leaveRq-outer">

                            {
                                leaveReqData.map((data, index) => {
                                    return (
                                        <LeaveRequestCard userName={data.username} message={data.message}
                                                          key={index + 1}/>
                                    );
                                })
                            }
                        </div>

                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <div className="chart-text">
                            <h4>Low Attendance Researchers</h4>
                        </div>

                        <div className="low-att-table-outer">
                            <table className='table table-hover'>
                                <thead>
                                <tr>
                                    <th scope='col'></th>
                                    <th scope='col'>Nic</th>
                                    <th scope='col'>Name</th>
                                    <th className='table-danger' scope='col'>Month Attendance Count</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><Avatar>DR</Avatar></td>
                                    <td>200212639871V</td>
                                    <td>Dulantha Ranaweera</td>
                                    <td>71</td>
                                </tr>
                                <tr>
                                    <td><Avatar>AN</Avatar></td>
                                    <td>100216026952V</td>
                                    <td>Anuja Nimsara</td>
                                    <td>76</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;