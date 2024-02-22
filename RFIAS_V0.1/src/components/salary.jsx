import {
    Button,
    Card,
    Col,
    DatePicker,
    Divider,
    Form,
    Input,
    Modal,
    Row,
    Select,
    Space,
    Table,
    Tag,
    TimePicker
} from "antd";
import React, {useState} from "react";
import {faker} from "@faker-js/faker";
import {ButtonGroup} from "react-bootstrap";
import {AiTwotoneDelete} from "react-icons/ai";

function Salary(){

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
                salAmount: faker.datatype.number(100000),
                salMonth: faker.date.month(),

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

                        <Modal centered open={modelReg} okButtonProps={{style: {display: 'none'}}}
                               onCancel={onCancelReg} width={1600}>

                            <div className="model-inner-attend">
                                <Row>

                                    <Col span={24}>

                                        <Divider orientation="left">
                                            <div className="tblText">
                                                <h6> Set Employee Salary </h6>
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
                                                        <Form.Item label='Salary Amount'>
                                                            <Input type='number' variant='filled'
                                                                   placeholder='Salary Amount'/>
                                                        </Form.Item>
                                                    </div>

                                                </Col>


                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">

                                                        <Form.Item label='Salary Month'>
                                                            <Select variant='filled'
                                                                    defaultValue='Select Month'
                                                                    onChange={desiSelector}
                                                                    options={[
                                                                        {
                                                                            value: 'selectMonth',
                                                                            label: 'Select Month',
                                                                            disabled: true
                                                                        },
                                                                        {
                                                                            value: 'january',
                                                                            label: 'January',
                                                                        },
                                                                        {
                                                                            value: 'february',
                                                                            label: 'February',
                                                                        },
                                                                        {
                                                                            value: 'march',
                                                                            label: 'March',
                                                                        },
                                                                        {
                                                                            value: 'april',
                                                                            label: 'April',
                                                                        },
                                                                        {
                                                                            value: 'may',
                                                                            label: 'May',
                                                                        },
                                                                        {
                                                                            value: 'june',
                                                                            label: 'June',
                                                                        },
                                                                        {
                                                                            value: 'july',
                                                                            label: 'July',
                                                                        },
                                                                        {
                                                                            value: 'august',
                                                                            label: 'August',
                                                                        },
                                                                        {
                                                                            value: 'september',
                                                                            label: 'September',
                                                                        },
                                                                        {
                                                                            value: 'october',
                                                                            label: 'October',
                                                                        },
                                                                        {
                                                                            value: 'november',
                                                                            label: 'November',
                                                                        },
                                                                        {
                                                                            value: 'december',
                                                                            label: 'December',
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
                                                            <Form.Item label='Today Date'>
                                                                <DatePicker variant='filled' onChange={dateChange}
                                                                            placeholder='Select Date'/>
                                                            </Form.Item>
                                                        </Space>
                                                    </div>

                                                </Col>

                                                <Col span={24}>

                                                    <div className="btnNext">

                                                        <Button type='dashed' htmlType='reset'>Reset</Button>
                                                        <Button type='primary' htmlType='submit'>Set Salary</Button>


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
                                                <h6> Update Employee Salary </h6>
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
                                                        <Form.Item label='Salary Amount'>
                                                            <Input type='number' variant='filled'
                                                                   placeholder='Salary Amount'/>
                                                        </Form.Item>
                                                    </div>

                                                </Col>


                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">

                                                        <Form.Item label='Salary Month'>
                                                            <Select variant='filled'
                                                                    defaultValue='Select Month'
                                                                    onChange={desiSelector}
                                                                    options={[
                                                                        {
                                                                            value: 'selectMonth',
                                                                            label: 'Select Month',
                                                                            disabled: true
                                                                        },
                                                                        {
                                                                            value: 'january',
                                                                            label: 'January',
                                                                        },
                                                                        {
                                                                            value: 'february',
                                                                            label: 'February',
                                                                        },
                                                                        {
                                                                            value: 'march',
                                                                            label: 'March',
                                                                        },
                                                                        {
                                                                            value: 'april',
                                                                            label: 'April',
                                                                        },
                                                                        {
                                                                            value: 'may',
                                                                            label: 'May',
                                                                        },
                                                                        {
                                                                            value: 'june',
                                                                            label: 'June',
                                                                        },
                                                                        {
                                                                            value: 'july',
                                                                            label: 'July',
                                                                        },
                                                                        {
                                                                            value: 'august',
                                                                            label: 'August',
                                                                        },
                                                                        {
                                                                            value: 'september',
                                                                            label: 'September',
                                                                        },
                                                                        {
                                                                            value: 'october',
                                                                            label: 'October',
                                                                        },
                                                                        {
                                                                            value: 'november',
                                                                            label: 'November',
                                                                        },
                                                                        {
                                                                            value: 'december',
                                                                            label: 'December',
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
                                                            <Form.Item label='Today Date'>
                                                                <DatePicker variant='filled' onChange={dateChange}
                                                                            placeholder='Select Date'/>
                                                            </Form.Item>
                                                        </Space>
                                                    </div>

                                                </Col>

                                                <Col span={24}>

                                                    <div className="btnNext">

                                                        <Button type='dashed' htmlType='reset'>Reset</Button>
                                                        <Button type='primary' htmlType='submit'>Update
                                                            Salary</Button>


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

                                    <Button type='primary' size='default' onClick={showModelReg}>Set Salary</Button>
                                    <Button className='but-success' type='primary' onClick={showModelUpd}
                                            size='default'>Update Salary</Button>

                                </div>
                            </Col>
                        </Row>

                        <Divider orientation="left">
                            <div className="tblText">
                                <h6>All Employees Salary Details</h6>
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
                                    dataIndex: 'salAmount',
                                    title: 'Salary Amount',
                                    key: 'salAmount'
                                },
                                {
                                    dataIndex: 'salMonth',
                                    title: 'Salary Month',
                                    key: 'salMonth'
                                },
                                {
                                    dataIndex: 'salDate',
                                    title: 'Date',
                                    key: 'salDate'
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

    );

}


export default Salary;
