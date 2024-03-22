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
    TimePicker, Upload
} from "antd";
import React, {useState} from "react";
import {faker} from "@faker-js/faker";
import {ButtonGroup} from "react-bootstrap";
import {AiTwotoneDelete} from "react-icons/ai";

function Report() {

    const [modelReg, setModalReg] = useState(false);
    const [modelUpd, setModalUpd] = useState(false);

    const showModelReg = () => setModalReg(true);
    const showModelUpd = () => setModalUpd(true);
    const onCancelReg = () => setModalReg(false);
    const onCancelUpd = () => setModalUpd(false);

    const dateChange = (date, dateString) => {
        console.log(date, dateString);
    }
    const empData = () => {
        const dat = [];

        for (let i = 0; i < 34; i++) {
            dat.push({
                reportId: faker.datatype.number(100),
                reportTitle: faker.lorem.sentence(),
                reportDes: faker.lorem.lines(),
                repFile: faker.image.abstract(1234, 2345),

            })

        }
        return dat;
    }
    const generateData = empData();



    return (

        <>

            <Row gutter={12}>
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
                                                            onClick={showModelReg}>+ Add Report</Button>
                                                    <Button className='but-success' type='primary' onClick={showModelUpd}
                                                            size='middle'>Update Report</Button>
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
                                            <h6>Fully Research Reports </h6>
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

                        <Modal centered open={modelReg} okButtonProps={{style: {display: 'none'}}}
                               onCancel={onCancelReg} width={1600}>

                            <div className="model-inner-attend">
                                <Row>

                                    <Col span={24}>

                                        <Divider orientation="left">
                                            <div className="tblText">
                                                <h6> Add Research Report </h6>
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

                                                        <Form.Item label='Report ID' name='empid' rules={[
                                                            {
                                                                required: true,
                                                                message: 'insert employee id',
                                                            },
                                                        ]}>
                                                            <Input type='number' variant='filled'
                                                                   placeholder='Report ID'/>
                                                        </Form.Item>
                                                    </div>

                                                </Col>

                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">
                                                        <Form.Item label='Report Title'>
                                                            <Input type='text' variant='filled'
                                                                   placeholder='Report Title'/>
                                                        </Form.Item>
                                                    </div>

                                                </Col>

                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "50%"}}>

                                                    <div className="input-outer">
                                                        <Form.Item label='Report Description'>
                                                            <Input.TextArea variant='filled'/>
                                                        </Form.Item>
                                                    </div>

                                                </Col>

                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">

                                                        <Form.Item label='Report File' name='Report File'>
                                                            <Upload>
                                                                <Button type='link'>Upload Report File</Button>
                                                            </Upload>
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


                                                <Col span={24}>

                                                    <div className="btnNext">

                                                        <Button type='dashed' htmlType='reset'>Reset</Button>
                                                        <Button type='primary' htmlType='submit'>Add
                                                            Report</Button>


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
                                                <h6> Update Research Report </h6>
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

                                                        <Form.Item label='Report ID' name='empid' rules={[
                                                            {
                                                                required: true,
                                                                message: 'insert employee id',
                                                            },
                                                        ]}>
                                                            <Input type='number' variant='filled'
                                                                   placeholder='Report ID'/>
                                                        </Form.Item>
                                                    </div>

                                                </Col>

                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">
                                                        <Form.Item label='Report Title'>
                                                            <Input type='text' variant='filled'
                                                                   placeholder='Report Title'/>
                                                        </Form.Item>
                                                    </div>

                                                </Col>

                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "50%"}}>

                                                    <div className="input-outer">
                                                        <Form.Item label='Report Description'>
                                                            <Input.TextArea variant='filled'/>
                                                        </Form.Item>
                                                    </div>

                                                </Col>

                                                <Col xs={{flex: "100%"}}
                                                     sm={{flex: "100%"}}
                                                     md={{flex: "50%"}}
                                                     lg={{flex: "25%"}}>

                                                    <div className="input-outer">

                                                        <Form.Item label='Report File' name='Report File'>
                                                            <Upload>
                                                                <Button type='link'>Upload Report File</Button>
                                                            </Upload>
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


                                                <Col span={24}>

                                                    <div className="btnNext">

                                                        <Button type='dashed' htmlType='reset'>Reset</Button>
                                                        <Button type='primary' htmlType='submit'>Update
                                                            Report</Button>


                                                    </div>
                                                </Col>


                                            </Row>
                                        </Form>

                                    </div>
                                </Row>
                            </div>
                        </Modal>


                        {/*<Row>*/}

                        {/*    <Col span={24}>*/}

                        {/*        <div className="button-group-outer">*/}

                        {/*            <Button type='primary' size='default' onClick={showModelReg}>Add Report</Button>*/}
                        {/*            <Button className='but-success' type='primary' onClick={showModelUpd}*/}
                        {/*                    size='default'>Update Report</Button>*/}

                        {/*        </div>*/}
                        {/*    </Col>*/}
                        {/*</Row>*/}

                        {/*<Divider orientation="left">*/}
                        {/*    <div className="tblText">*/}
                        {/*        <h6>All Research Reports</h6>*/}
                        {/*    </div>*/}
                        {/*</Divider>*/}
                        <br/>

                        <div className="tbl-inner">

                            <Table dataSource={generateData} columns={[
                                {
                                    dataIndex: 'reportId',
                                    title: 'Report ID',
                                    key: 'reportId'
                                },
                                {
                                    dataIndex: 'reportTitle',
                                    title: 'Title',
                                    key: 'reportTitle'
                                },
                                {
                                    dataIndex: 'reportDes',
                                    title: 'Description',
                                    key: 'reportDes'
                                },
                                {
                                    dataIndex: 'repDate',
                                    title: 'Submission Date',
                                    key: 'repDate'
                                },
                                {
                                    dataIndex: 'repFile',
                                    title: 'Report File',
                                    key: 'repFile'
                                },
                                {
                                    title: 'Remove Details',
                                    render: ()=> (
                                        <ButtonGroup>
                                            <Button type='primary' danger size='middle'> <AiTwotoneDelete  className='btn-delete' /> Remove </Button>
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

export default Report;