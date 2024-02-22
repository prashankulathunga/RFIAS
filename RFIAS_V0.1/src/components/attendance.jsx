import {Card, Col, DatePicker, Divider, Form, Input, Modal, Row, Steps, Table, Tag, TimePicker, Upload} from "antd";
import {Button} from 'antd';
import {faker} from "@faker-js/faker";
import React, {useState} from "react";
import {Select, Space} from 'antd';
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {ButtonGroup} from "react-bootstrap";
import {TiDelete} from "react-icons/ti";
import {AiTwotoneDelete} from "react-icons/ai";
dayjs.extend(customParseFormat);

function Attendance() {

    const [modelReg, setModalReg] = useState(false);
    const [modelUpd, setModalUpd] = useState(false);

    const showModelReg = () => setModalReg(true);
    const showModelUpd = () => setModalUpd(true);
    const onCancelReg = () => setModalReg(false);
    const onCancelUpd = () => setModalUpd(false);

    const dateChange = (date, dateString) => {
        console.log(date, dateString);
    }
    const timeChange = (time, timeString) => {
        console.log(time, timeString);
    };

    const desiSelector = (value) => {
        console.log(value);
    }
    const empData = () => {
        const dat = [];

        for (let i = 0; i < 34; i++) {
            dat.push({
                empid: faker.datatype.number(1000),
                empname: faker.name.fullName(),
                atStatus: Math.random() > 0.5 ? true : false

            })

        }
        return dat;
    }
    const generateData = empData();


    return (
        <>
            <Row gutter={12}>
                <Col span={24}>


                    <Card className='shadow-outer empCard-outer'>

                        <Modal centered open={modelReg} okButtonProps={{style: {display: 'none'}}}
                               onCancel={onCancelReg} width={1600}>

                            <div className="model-inner-attend">
                                <Row>

                                    <Col span={24}>

                                        <Divider orientation="left">
                                            <div className="tblText">
                                                <h6> Mark Employee Attendance </h6>
                                            </div>
                                        </Divider>
                                        <br/>
                                    </Col>

                                    <div className="inputForm-outer">

                                        <Form>

                                            <Row gutter={24}>


                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">

                                                        <Form.Item label='Employee ID' name='empid' rules={[
                                                            {
                                                                required: true,
                                                                message: 'insert employee id',
                                                            },
                                                        ]}>
                                                            <Input type='number' variant='filled'
                                                                   placeholder='Employee ID'/>
                                                        </Form.Item>
                                                    </div>

                                                </Col>

                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">
                                                        <Form.Item label='Employee Name'>
                                                            <Input type='text' variant='filled'
                                                                   placeholder='First Name'/>
                                                        </Form.Item>
                                                    </div>

                                                </Col>


                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">

                                                        <Form.Item label='Attendence'>
                                                            <Select variant='filled'
                                                                    defaultValue='Select Attendance'
                                                                    onChange={desiSelector}
                                                                    options={[
                                                                        {
                                                                            value: 'selectAttendance',
                                                                            label: 'Select Attendance',
                                                                            disabled: true
                                                                        },
                                                                        {
                                                                            value: 'onTime',
                                                                            label: 'On Time',
                                                                        },
                                                                        {
                                                                            value: 'late',
                                                                            label: 'Late',
                                                                        },
                                                                        {
                                                                            value: 'absent',
                                                                            label: 'Absent',
                                                                        },

                                                                    ]}/>
                                                        </Form.Item>

                                                    </div>

                                                </Col>

                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">
                                                        <Space direction='vertical'>
                                                            <Form.Item label='Date'>
                                                                <DatePicker variant='filled' onChange={dateChange}
                                                                            placeholder='Select Date'/>
                                                            </Form.Item>
                                                        </Space>
                                                    </div>

                                                </Col>

                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">
                                                        <Form.Item label='Employee Reporting Time'>
                                                        <TimePicker onChange={timeChange} changeOnScroll variant='filled'
                                                                    needConfirm={false}/>
                                                        </Form.Item>
                                                    </div>
                                                </Col>


                                                <Col span={24}>

                                                    <div className="btnNext">

                                                        <Button type='dashed' htmlType='reset'>Reset</Button>
                                                        <Button type='primary' htmlType='submit'>Mark
                                                            Attendance</Button>


                                                    </div>
                                                </Col>


                                            </Row>
                                        </Form>

                                    </div>
                                </Row>
                            </div>
                        </Modal>


                        <Modal centered open={modelUpd} okButtonProps={{style: {display: 'none'}}}
                               onCancel={onCancelUpd} width={1600}>

                            <div className="model-inner-attend">
                                <Row>

                                    <Col span={24}>

                                        <Divider orientation="left">
                                            <div className="tblText">
                                                <h6> Update Employee Attendance</h6>
                                            </div>
                                        </Divider>
                                        <br/>
                                    </Col>

                                    <div className="inputForm-outer">

                                        <Form>

                                            <Row gutter={24}>


                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">

                                                        <Form.Item label='Employee ID' name='empid' rules={[
                                                            {
                                                                required: true,
                                                                message: 'insert employee id',
                                                            },
                                                        ]}>
                                                            <Input type='number' variant='filled'
                                                                   placeholder='Employee ID'/>
                                                        </Form.Item>
                                                    </div>

                                                </Col>

                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">
                                                        <Form.Item label='Employee Name'>
                                                            <Input type='text' variant='filled'
                                                                   placeholder='First Name'/>
                                                        </Form.Item>
                                                    </div>

                                                </Col>


                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">

                                                        <Form.Item label='Attendence'>
                                                            <Select variant='filled'
                                                                    defaultValue='Select Attendance'
                                                                    onChange={desiSelector}
                                                                    options={[
                                                                        {
                                                                            value: 'selectAttendance',
                                                                            label: 'Select Attendance',
                                                                            disabled: true
                                                                        },
                                                                        {
                                                                            value: 'onTime',
                                                                            label: 'On Time',
                                                                        },
                                                                        {
                                                                            value: 'late',
                                                                            label: 'Late',
                                                                        },
                                                                        {
                                                                            value: 'absent',
                                                                            label: 'Absent',
                                                                        },

                                                                    ]}/>
                                                        </Form.Item>

                                                    </div>

                                                </Col>

                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">
                                                        <Space direction='vertical'>
                                                            <Form.Item label='Date'>
                                                                <DatePicker variant='filled' onChange={dateChange}
                                                                            placeholder='Select Date'/>
                                                            </Form.Item>
                                                        </Space>
                                                    </div>

                                                </Col>

                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">
                                                        <Form.Item label='Employee Reporting Time'>
                                                            <TimePicker onChange={timeChange} changeOnScroll variant='filled'
                                                                        needConfirm={false}/>
                                                        </Form.Item>
                                                    </div>
                                                </Col>


                                                <Col span={24}>

                                                    <div className="btnNext">

                                                        <Button type='dashed' htmlType='reset'>Reset</Button>
                                                        <Button type='primary' htmlType='submit'>Update
                                                            Attendance</Button>


                                                    </div>
                                                </Col>


                                            </Row>
                                        </Form>

                                    </div>
                                </Row>
                            </div>
                        </Modal>


                        <Row>

                            <Col span={24}>

                                <div className="button-group-outer">

                                    <Button type='primary' size='default' onClick={showModelReg}>Mark Attendance</Button>
                                    <Button className='but-success' type='primary' onClick={showModelUpd}
                                            size='default'>Update Attendance</Button>

                                </div>
                            </Col>
                        </Row>

                        <Divider orientation="left">
                            <div className="tblText">
                                <h6>All Employees Attendance </h6>
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
                                    dataIndex: 'atDate',
                                    title: 'Date',
                                    key: 'atDate'
                                },
                                {
                                    dataIndex: 'atTime',
                                    title: 'Time',
                                    key: 'atTime'
                                },
                                {
                                    dataIndex: 'atStatus',
                                    title: 'Status',
                                    render: (val) =>
                                        val ? <Tag color="green">Active</Tag> : <Tag color="red">Not Active</Tag>
                                },
                                {
                                    title: 'Remove Details',
                                    render: ()=> (
                                        <ButtonGroup>
                                            <Button type='primary' danger size='small'> <AiTwotoneDelete className='btn-delete' /> Remove </Button>
                                        </ButtonGroup>

                                    )
                                },

                            ]}></Table>
                        </div>


                    </Card>


                </Col>


            </Row>
        </>
    )
        ;


}

export default Attendance;