import { Table } from "react-bootstrap";
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
    <Container>
      <Row>
        <Col>
          <div className="accountdetail">
            <div className="row1">
              <label>Mobile Number</label>
              <input type="text" />
            </div>
            <div className="row2">
              <label>Position</label>
              <input type="text" /> <br />
              <label>Birth of Date</label>
              <input type="text" />
            </div>
            <div className="row3">
              <label>location</label>
              <input type="location" />
              <br />
              <label>Email</label>
              <input type="email" />
            </div>
          </div>
        </Col>
        <Col> 2 of 2 </Col>
      </Row>
      <Row>
        <Col>CHART</Col>
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
