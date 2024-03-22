import {Card, Col, DatePicker, Divider, Form, Input, Modal, Row, Steps, Table, Upload} from "antd";
import {Button} from 'antd';
import {faker} from "@faker-js/faker";
import React, {useState} from "react";
import {Radio} from 'antd';
import {Select, Space} from 'antd';
import {ButtonGroup} from "react-bootstrap";
import {TiDelete} from "react-icons/ti";
import {AiTwotoneDelete} from "react-icons/ai";
import {FaSearch} from "react-icons/fa";

function Employee() {

    const valuesName = [
        {
            label: 'Male',
            value: 'Male',
            title: 'Male',
        },
        {
            label: 'Female',
            value: 'Female',
            title: 'Female',
        }
    ]

    const [modelReg, setModalReg] = useState(false);
    const [modelUpd, setModalUpd] = useState(false);
    const [radioValue, setradioValue] = useState('Male');

    const showModelReg = () => setModalReg(true);
    const showModelUpd = () => setModalUpd(true);
    const onCancelReg = () => setModalReg(false);
    const onCancelUpd = () => setModalUpd(false);

    const radioChange = ({target: {value}}) => {
        setradioValue(value);
    }

    const dateChange = (date, dateString) => {
        console.log(date, dateString);
    }

    const desiSelector = (value) => {
        console.log(value);
    }

    const empData = () => {
        const dat = [];

        for (let i = 0; i < 34; i++) {
            dat.push({
                empid: faker.datatype.number(1000),
                empnic: faker.datatype.number(100000000),
                empname: faker.name.fullName(),
                empgender: faker.person.sexType(),
                empdob: faker.date.birthdate(),
                empmail: faker.internet.email(),
                empphone: faker.datatype.number(1000000000),
                empaddress: faker.address.city(),
                empdesi: faker.helpers.arrayElement(['researcher', 'professor'])

            })

        }
        return dat;
    }
    const generateData = empData();


    return (
        <>

            <Col span={24}>

                <Row gutter={16}>
                    <Col span={12}>

                        <Card className='shadow-outer tbl-outer welcome-bgColor'>

                            <Row>

                                <Col span={24}>
                                    <Row>

                                        <div className="button-group-outer">

                                            <Col span={12}>
                                                <div className="search-outer">

                                                    <Input type='text' variant='filled' placeholder='search here'/>

                                                </div>

                                            </Col>

                                            <div className="button-group-inner">
                                                <Button type='primary' size='middle'
                                                        onClick={showModelReg}>Registration</Button>
                                                <Button className='but-success' type='primary' onClick={showModelUpd}
                                                        size='middle'>Update Employee</Button>
                                            </div>

                                        </div>

                                    </Row>
                                </Col>
                            </Row>

                        </Card>
                    </Col>

                    <Col span={12}>

                        <Card className='shadow-outer tbl-outer upper-height welcome-bgColor flex-content'>

                            <div className="emp-desc">

                                <Divider orientation="left">
                                    <div className="tblText">
                                        <h6>Fully Employees </h6>
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

                    <Modal centered open={modelReg} okButtonProps={{style: {display: 'none'}}} onCancel={onCancelReg}
                           width={1600}>

                        <div className="model-inner-emp">
                            <Row>

                                <Col span={24}>

                                    <Divider orientation="left">
                                        <div className="tblText">
                                            <h6> Register Employee </h6>
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
                                                 lg={{flex: "20%"}}>

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
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Employee NIC'>
                                                        <Input type='text' variant='filled' placeholder='Employee NIC'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='First Name'>
                                                        <Input type='text' variant='filled' placeholder='First Name'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Last Name'>
                                                        <Input type='text' variant='filled' placeholder='Last Name'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Gender'>

                                                        <Radio.Group options={valuesName} size='small'
                                                                     onChange={radioChange}
                                                                     value={radioValue}
                                                                     optionType="button"
                                                                     buttonStyle="solid"
                                                        />

                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Space direction='vertical'>
                                                        <Form.Item label='Date Of Birth'>
                                                            <DatePicker variant='filled' onChange={dateChange}
                                                                        placeholder='Select Birth Date'/>
                                                        </Form.Item>
                                                    </Space>
                                                </div>

                                            </Col>


                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Email'>
                                                        <Input type='email' variant='filled'
                                                               placeholder='Email Address'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Phone'>
                                                        <Input type='number' variant='filled'
                                                               placeholder='Phone Number'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>


                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Street'>
                                                        <Input type='text' variant='filled' placeholder='Street'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>


                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='City'>
                                                        <Input type='text' variant='filled' placeholder='City'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Postal Code'>
                                                        <Input type='number' variant='filled'
                                                               placeholder='Postal Code'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">

                                                    <Form.Item label='Designation'>
                                                        <Select variant='filled'
                                                                defaultValue='Select Designation'
                                                                onChange={desiSelector}
                                                                options={[
                                                                    {
                                                                        value: 'selectDesignation',
                                                                        label: 'Select Designation',
                                                                        disabled: true
                                                                    },
                                                                    {
                                                                        value: 'researcher',
                                                                        label: 'Researcher',
                                                                    },
                                                                    {
                                                                        value: 'professor',
                                                                        label: 'Professor',
                                                                    },
                                                                ]}/>
                                                    </Form.Item>

                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">

                                                    <Form.Item label='Profile Picture' name='Profile Picture'>
                                                        <Upload>
                                                            <Button type='link'>Upload Profile Picture</Button>
                                                        </Upload>
                                                    </Form.Item>
                                                </div>
                                            </Col>


                                            <Col span={24}>

                                                <div className="btnNext">

                                                    <Button type='dashed' htmlType='reset'>Reset</Button>
                                                    <Button type='primary' htmlType='submit'>Register</Button>


                                                </div>

                                            </Col>


                                        </Row>
                                    </Form>

                                </div>
                            </Row>
                        </div>
                    </Modal>


                    <Modal centered open={modelUpd} okButtonProps={{style: {display: 'none'}}} onCancel={onCancelUpd}
                           width={1600}>

                        <div className="model-inner-emp">
                            <Row>

                                <Col span={24}>

                                    <Divider orientation="left">
                                        <div className="tblText">
                                            <h6> Update Employee </h6>
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
                                                 lg={{flex: "20%"}}>

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
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Employee NIC'>
                                                        <Input type='text' variant='filled' placeholder='Employee NIC'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='First Name'>
                                                        <Input type='text' variant='filled' placeholder='First Name'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Last Name'>
                                                        <Input type='text' variant='filled' placeholder='Last Name'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Gender'>

                                                        <Radio.Group options={valuesName} size='small'
                                                                     onChange={radioChange}
                                                                     value={radioValue}
                                                                     optionType="button"
                                                                     buttonStyle="solid"
                                                        />

                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Space direction='vertical'>
                                                        <Form.Item label='Date Of Birth'>
                                                            <DatePicker variant='filled' onChange={dateChange}
                                                                        placeholder='Select Birth Date'/>
                                                        </Form.Item>
                                                    </Space>
                                                </div>

                                            </Col>


                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Email'>
                                                        <Input type='email' variant='filled'
                                                               placeholder='Email Address'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Phone'>
                                                        <Input type='number' variant='filled'
                                                               placeholder='Phone Number'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>


                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Street'>
                                                        <Input type='text' variant='filled' placeholder='Street'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>


                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='City'>
                                                        <Input type='text' variant='filled' placeholder='City'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">
                                                    <Form.Item label='Postal Code'>
                                                        <Input type='number' variant='filled'
                                                               placeholder='Postal Code'/>
                                                    </Form.Item>
                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">

                                                    <Form.Item label='Designation'>
                                                        <Select variant='filled'
                                                                defaultValue='Select Designation'
                                                                onChange={desiSelector}
                                                                options={[
                                                                    {
                                                                        value: 'selectDesignation',
                                                                        label: 'Select Designation',
                                                                        disabled: true
                                                                    },
                                                                    {
                                                                        value: 'researcher',
                                                                        label: 'Researcher',
                                                                    },
                                                                    {
                                                                        value: 'professor',
                                                                        label: 'Professor',
                                                                    },
                                                                ]}/>
                                                    </Form.Item>

                                                </div>

                                            </Col>

                                            <Col xs={{flex: "100%"}}
                                                 sm={{flex: "100%"}}
                                                 md={{flex: "50%"}}
                                                 lg={{flex: "20%"}}>

                                                <div className="input-outer">

                                                    <Form.Item label='Profile Picture' name='Profile Picture'>
                                                        <Upload>
                                                            <Button type='link'>Upload Profile Picture</Button>
                                                        </Upload>
                                                    </Form.Item>
                                                </div>
                                            </Col>


                                            <Col span={24}>

                                                <div className="btnNext">

                                                    <Button type='dashed' htmlType='reset'>Reset</Button>
                                                    <Button type='primary' htmlType='submit'>Update</Button>


                                                </div>

                                            </Col>


                                        </Row>
                                    </Form>

                                </div>
                            </Row>
                        </div>
                    </Modal>


                    <br/>


                    <div className="tbl-inner">

                        <Table dataSource={generateData} columns={[
                            {
                                dataIndex: 'empid',
                                title: 'Employee ID',
                                key: 'empid'
                            },
                            {
                                dataIndex: 'empnic',
                                title: 'NIC',
                                key: 'empnic'
                            },
                            {
                                dataIndex: 'empname',
                                title: 'Name',
                                key: 'empname'
                            },
                            {
                                dataIndex: 'empgender',
                                title: 'Gender',
                                key: 'empgender'
                            },
                            {
                                dataIndex: 'empdob',
                                title: 'Dob',
                                key: 'empdob'
                            },
                            {
                                dataIndex: 'empmail',
                                title: 'Email',
                                key: 'empmail'
                            },
                            {
                                dataIndex: 'empphone',
                                title: 'Phone',
                                key: 'empphone'
                            },
                            {
                                dataIndex: 'empaddress',
                                title: 'Address',
                                key: 'empaddress'
                            },
                            {
                                dataIndex: 'empdesi',
                                title: 'Designation',
                                key: 'empdesi'
                            },
                            {
                                title: 'Remove Details',
                                render: () => (
                                    <ButtonGroup>
                                        <Button type='primary' danger size='middle'> <AiTwotoneDelete
                                            className='btn-delete'/> Remove </Button>
                                    </ButtonGroup>

                                )
                            },

                        ]}></Table>
                    </div>


                </Card>


            </Col>


        </>
    );


}

export default Employee;