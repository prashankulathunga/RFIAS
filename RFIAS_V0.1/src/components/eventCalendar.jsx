import React, {useState} from 'react';
import {Calendar, Card, Col, Form, Input, Row} from 'antd';

function EventCalendar(){

    const [date, setDate] = useState();
    const [message, setMessage] = useState();


    return(
        <>
            <Col xs={{flex: "100%"}}
                 sm={{flex: "100%"}}
                 md={{flex: "50%"}}
                 lg={{flex: "25%"}}>

                <div className="input-outer">
                    <Form>
                    <Form.Item label='Event Message' name='empid'>
                        <Input type='text' variant='filled'
                               placeholder='message'/>
                    </Form.Item>
                    </Form>
                </div>

            </Col>

            <Row gutter={12}>
                <Col span={24}>
                    <Card className='shadow-outer empCard-outer'>


                        <Calendar onSelect={(date)=>{
                            setDate(date);
                            console.log(date);
                        }}
                            dateCellRender={()=>{
                                    return <h5> {message} </h5>;
                            }}


                        />


                    </Card>
                </Col>
            </Row>

        </>
    );
}
export default EventCalendar;