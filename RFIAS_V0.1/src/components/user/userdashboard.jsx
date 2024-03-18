import { Form, FormLabel, Table } from "react-bootstrap";
import "./allcss.css";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Udashboard() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Container fluid className="pg" >
      <Row>
      <Col className="col1" style={{ paddingLeft: '100px' }}>
          <Form>
            <div className="accountdetail">
              <div className="row1">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <FormLabel id="profilename">Allen Perkins </FormLabel> <br/>
                  <FormLabel id="profileposition">Researcher </FormLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <FormLabel>Mobile Number </FormLabel>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <div className="row2">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <FormLabel>Birth of Date </FormLabel>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <FormLabel>Email </FormLabel>
                  <Form.Control type="Email" />
                </Form.Group>
              </div>
              <div className="row3">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <FormLabel>Position </FormLabel>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <FormLabel>location </FormLabel>
                  <Form.Control type="loaction" />
                </Form.Group>
              </div>
            </div>
          </Form>
        </Col>
        
        <Col className="col2">
  <div className="time">
    <h3>Today:</h3>
    <h2>{dateTime.toLocaleDateString()}</h2>
    
  </div>
</Col>
        
      </Row>
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <div className="Leaveoverview">
            <h2>Attendance Overveiw</h2>
            <Table id="attendanceoverveiwtable" responsive striped border hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Work hours</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Udashboard;
