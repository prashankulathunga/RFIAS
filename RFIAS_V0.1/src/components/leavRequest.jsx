import {Button, Card, Col, Divider, Input, Row, Table} from "antd";
import React from "react";
import {ButtonGroup} from "react-bootstrap";
import {AiTwotoneDelete} from "react-icons/ai";
import {faker} from "@faker-js/faker";
import {MdPlaylistRemove} from "react-icons/md";
import {PiPaperPlaneRightDuotone, PiPaperPlaneRightFill} from "react-icons/pi";

function LeavRequest(){

    const empData = () => {
        const dat = [];

        for (let i = 0; i < 34; i++) {
            dat.push({
                empid: faker.datatype.number(100),
                empname: faker.name.fullName(),
                reqDes: faker.lorem.lines(),
            })

        }
        return dat;
    }
    const generateData = empData();

    return(

        <>

            <Row gutter={12}>
                <Col span={24}>

                    <Row gutter={16}>
                        <Col span={8}>

                            <Card className='shadow-outer tbl-outer welcome-bgColor'>

                                <Row>

                                    <Col span={24}>
                                        <Row>

                                            <div className="button-group-outer">

                                                <Col span={24}>
                                                    <div className="search-outer">

                                                        <Input type='text' variant='filled' placeholder='search here'/>

                                                    </div>

                                                </Col>

                                            </div>

                                        </Row>
                                    </Col>
                                </Row>

                            </Card>
                        </Col>

                        <Col span={16}>

                            <Card className='shadow-outer tbl-outer upper-height welcome-bgColor flex-content'>

                                <div className="emp-desc">

                                    <Divider orientation="left">
                                        <div className="tblText">
                                            <h6>Employees Leave Requests </h6>
                                        </div>
                                    </Divider>

                                    <p>
                                        An employee is an individual hired by a company or organization to fulfill specific
                                        job duties in exchange for compensation. Employees play a vital role in the success
                                        of the organization by contributing their skills, knowledge, and effort to achieve
                                        common goals and objectives.</p>
                                </div>

                            </Card>

                        </Col>
                    </Row>

                    <Card className='shadow-outer empCard-outer'>

                        {/*<Divider orientation="left">*/}
                        {/*    <div className="tblText">*/}
                        {/*        <h6>Leave Requests</h6>*/}
                        {/*    </div>*/}
                        {/*</Divider>*/}
                        <br/>

                        <div className="tbl-inner">

                            <Table dataSource={generateData} columns={[
                                {
                                    dataIndex: 'empid',
                                    title: 'Employee ID',
                                    key: 'empid'
                                },
                                {
                                    dataIndex: 'empname',
                                    title: 'Name',
                                    key: 'empname'
                                },
                                {
                                    dataIndex: 'reqDes',
                                    title: 'Request Description',
                                    key: 'reqDes'
                                },
                                {
                                    dataIndex: 'reqDate',
                                    title: 'Request Date',
                                    key: 'reqDate'
                                },
                                {
                                    title: 'Actions',
                                    render: ()=> (
                                        <ButtonGroup className='btn-group-outer'>
                                            <Button type='primary' className='but-success' size='middle'> <PiPaperPlaneRightFill     className='btn-delete' /> Accept </Button>
                                            <Button type='primary' danger size='middle'> <MdPlaylistRemove   className='btn-delete' /> Decline </Button>
                                        </ButtonGroup>

                                    )
                                },
                            ]}></Table>
                        </div>



                    </Card>
                </Col>
            </Row>

        </>


    );
}

export default LeavRequest;