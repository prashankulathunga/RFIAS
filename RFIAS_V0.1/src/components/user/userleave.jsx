import Table from "react-bootstrap/Table";
function Leave() {
  return (
    <div className="page">
      <div className="stas">
        <div className="box">
          <i className="uli-file">
            <h3 id="statmaintext"> Complete</h3>
            <p id="statbottomtext">05</p>
          </i>
        </div>
        <div className="box">
          <i className="uli-file">
            <h3 id="statmaintext"> Running</h3>
            <p id="statbottomtext">02</p>
          </i>
        </div>
        <div className="box">
          <i className="uli-file">
            <h3 id="statmaintext"> Total Research </h3>
            <p id="statbottomtext">05</p>
          </i>
        </div>
        <div className="box">
          <i className="uli-file">
            <h3 id="statmaintext"> Hold</h3>
            <p id="statbottomtext">05</p>
          </i>
        </div>
      </div>

      <div className="formdetail">
        <h1>Request Leave </h1>

        <input type="date" id="requstdate" placeholder="Request Date" />
        <input type="text" id="leavetype" placeholder="Leave type" />
        <input type="date" id="leaveto" placeholder="Leave To" />
        <input type="date" id="leavefrom" placeholder="Leave From" />
        <input type="text" id="reason" placeholder="Reason for leave" />
        <br></br>

        <button type="submit" id="submitleave">
          {" "}
          submit{" "}
        </button>
      </div>

      <div className="Leaveoverview">
        <Table id="leaveoverveiwtable" responsive striped border hover>
          <thead>
            <tr>
              <th>Requset Date</th>
              <th>Leave Type</th>
              <th>Leave From</th>
              <th>Leave To</th>
              <th>Reason for leave</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
}

import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import "./allcss.css"
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Leave() {
  return (
    <Container fluid className="pg" >
 
    <div className="page">
      <div className="leavepgboxes">
        <div className="leave-box">
          <i className="uli-file">
            <h3 id="statmaintext"> Casual Leave</h3>
            <p id="statbottomtext">Available - 05 <br/> Used - 02</p>
          </i>
        </div>
        <div className="leave-box">
          <i className="uli-file">
            <h3 id="statmaintext"> Sick Leave</h3>
            <p id="statbottomtext">Available - 05 <br/> Used - 02</p>
          </i>
        </div>
        <div className="leave-box">
          <i className="uli-file">
            <h3 id="statmaintext"> All Leave </h3>
            <p id="statbottomtext">Available - 05 <br/> Used - 02</p>
          </i>
        </div>
      </div>
      <Col style={{float: "left", width: '50%'}}>
      

      <div className="leaveformdetail">
        <h1 style={{paddingLeft:'15px'}}>Request Leave </h1>
        <br></br>
        <div className="leaveinput">
        <div className="firstrow">
        <input type="text" id="leaveinput" placeholder="Request Date MM/DD/YYYY" onFocus={"(this.type=''date')"} onBlur={"(this.type='text')"}/>
        <input type="text" id="leaveinput" placeholder="Leave type" />

        </div>

        <div className="secondrow">
        <input type="text" id="leaveinput" placeholder="Leave To MM/DD/YYYY" onFocus={"(this.type=''date')"} onBlur={"(this.type='text')"}/>
        <input type="text" id="leaveinput" placeholder="Leave From MM/DD/YYYY" onFocus={"(this.type=''date')"} onBlur={"(this.type='text')"}/>

        </div>
        <div className="thirdrow">
        <input type="text" id="leaveinput" placeholder="Reason for leave" />

        </div>
        
        
        <br></br>



        <div className="fourthrow">
        <Button type="submit" variant="outline-primary" className="submitleave">Submit</Button>{' '}

        </div>

        </div>

       
      </div>
      </Col>
      <Col style={{float: "right", width:'50%'}}>

      <div className="Leaveoverview">
        <h2>Leave Request Overveiw</h2>
        <Table id="leaveoverveiwtable" responsive striped border hover>
          <thead>
            <tr>
              <th>Requset Date</th>
              <th>Leave Type</th>
              <th>Leave From</th>
              <th>Leave To</th>
              <th>Reason for leave</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
      </Col>
    </div>
    
    </Container>
  );
}

export default Leave;
