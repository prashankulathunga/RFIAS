import {Card, Col, Divider, Empty, Row, Space, Table, Tag, Typography} from "antd";
import {HiUserGroup} from "react-icons/hi";
import React, {useState} from "react";
import {faker} from "@faker-js/faker";
import {BsChatSquareQuoteFill, BsWalletFill} from "react-icons/bs";
import DefaultChart from "./cards/defaultChart.jsx";

function Home() {

    const data = () => {
        const dat = [];

        for (let i = 0; i < 34; i++) {
            dat.push({
                id: faker.datatype.number(1000),
                name: faker.name.fullName(),
                email: faker.internet.email(),
                status: Math.random() > 0.5 ? true : false
            })

        }
        return dat;
    }
    const generateData = data();

    return (
        <div>

            <div>

                {/*welcome text*/}

                <Row gutter={16}>

                    <Col span={24}>
                        <Card className='cht-outer'>
                            <Empty></Empty>
                        </Card>
                    </Col>

                </Row>


                <Row gutter={16}>

                    <Col xs={{flex: '100%'}}
                         sm={{flex: '100%'}}
                         md={{flex: '50%'}}
                         lg={{flex: '20%'}}>
                        <Card className='card-outer shadow-outer'>
                            <Space direction='vertical'>
                                <Typography.Text className='card-inner'>27</Typography.Text>
                                <Typography.Text className='cardText-item'>
                                    <Space direction='horizontal'> <HiUserGroup style={{fontSize: "18px"}}/> Total
                                         </Space>
                                </Typography.Text>
                            </Space>
                        </Card>
                    </Col>

                    <Col xs={{flex: '100%'}}
                         sm={{flex: '100%'}}
                         md={{flex: '50%'}}
                         lg={{flex: '20%'}}>
                        <Card className='card-outer shadow-outer'>
                            <Space direction='vertical'>
                                <Typography.Text className='card-inner'>17</Typography.Text>
                                <Typography.Text className='cardText-item'>
                                    <Space direction='horizontal'> <BsWalletFill  style={{fontSize: "18px"}}/> On Time
                                         </Space>
                                </Typography.Text>
                            </Space>
                        </Card>
                    </Col>

                    <Col xs={{flex: '100%'}}
                         sm={{flex: '100%'}}
                         md={{flex: '50%'}}
                         lg={{flex: '20%'}}>
                        <Card className='card-outer shadow-outer'>
                            <Space direction='vertical'>
                                <Typography.Text className='card-inner'>02</Typography.Text>
                                <Typography.Text className='cardText-item'>
                                    <Space direction='horizontal'> <BsWalletFill  style={{fontSize: "18px"}}/> Late
                                         </Space>
                                </Typography.Text>
                            </Space>
                        </Card>
                    </Col>

                    <Col xs={{flex: '100%'}}
                         sm={{flex: '100%'}}
                         md={{flex: '50%'}}
                         lg={{flex: '20%'}}>
                        <Card className='card-outer shadow-outer'>
                            <Space direction='vertical'>
                                <Typography.Text className='card-inner' style={{color:'red'}}>03</Typography.Text>
                                <Typography.Text className='cardText-item'>
                                    <Space direction='horizontal'> <BsWalletFill style={{fontSize: "18px"}}/> Absent
                                         </Space>
                                </Typography.Text>
                            </Space>
                        </Card>
                    </Col>

                    <Col xs={{flex: '100%'}}
                         sm={{flex: '100%'}}
                         md={{flex: '50%'}}
                         lg={{flex: '20%'}}>
                        <Card className='card-outer shadow-outer'>
                            <Space direction='vertical'>
                                <Typography.Text className='card-inner'>09</Typography.Text>
                                <Typography.Text className='cardText-item'>
                                    <Space direction='horizontal'> <BsChatSquareQuoteFill  style={{fontSize: "18px"}}/> Leave Requests
                                         </Space>
                                </Typography.Text>
                            </Space>
                        </Card>
                    </Col>


                </Row>
            </div>


            <Row gutter={16}>

                <Col xs={{flex: '100%'}}
                     sm={{flex: '100%'}}
                     md={{flex: '100%'}}
                     lg={{flex: '40%'}}>

                    <div className="tbl-outer">
                        <Card className='shadow-outer'>


                            <Divider orientation="left">
                                <div className="tblText">
                                    <h6>Daily Attendance View </h6>
                                </div>
                            </Divider>
                            <br/>

                            <div className="tbl-inner">
                                <Table dataSource={generateData} columns={[
                                    {
                                        dataIndex: "id",
                                        title: "ID",
                                        key: "id"
                                    },
                                    {
                                        dataIndex: "name",
                                        title: "Name",
                                        key: "name"
                                    },
                                    {
                                        dataIndex: "email",
                                        title: "Email",
                                        key: "email"
                                    },
                                    {
                                        dataIndex: "status",
                                        title: "Status",
                                        render: (val) =>
                                            val ? <Tag color="green">Active</Tag> : <Tag color="red">Not Active</Tag>

                                    },


                                ]}></Table>
                            </div>


                        </Card>
                    </div>
                </Col>




                <Col xs={{flex: '100%'}}
                     sm={{flex: '100%'}}
                     md={{flex: '100%'}}
                     lg={{flex: '40%'}}>

                    <div className="cht-outer">
                        <Card className='shadow-outer'>

                            <DefaultChart />

                        </Card>
                    </div>

                    <Card className='shadow-outer empty-margin'>
                        <Empty />
                    </Card>

                    <Card className='shadow-outer empty-margin'>
                        <Empty />
                    </Card>


                </Col>

                <Col lg={{flex:"19.9%"}}>
                <Card className='shadow-outer empty-margin'>
                    <Empty />
                </Card>

                    <Card className='shadow-outer empty-margin'>
                        <Empty />
                    </Card>



                </Col>

            </Row>



        </div>
    );
}

export default Home;