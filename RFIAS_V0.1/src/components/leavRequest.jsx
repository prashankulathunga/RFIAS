import {Button, Card, Col, Divider, Row, Table} from "antd";
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

                    <Card className='shadow-outer empCard-outer'>

                        <Divider orientation="left">
                            <div className="tblText">
                                <h6>Leave Requests</h6>
                            </div>
                        </Divider>
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
                                            <Button type='primary' className='but-success' size='small'> <PiPaperPlaneRightFill     className='btn-delete' /> Accept </Button>
                                            <Button type='primary' danger size='small'> <MdPlaylistRemove   className='btn-delete' /> Decline </Button>
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