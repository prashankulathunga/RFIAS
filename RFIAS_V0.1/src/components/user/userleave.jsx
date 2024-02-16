import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import "./allcss.css"
import Form from 'react-bootstrap/Form';
function Leave() {
  return (
    <div className="page">
      <div className="leavepg boxes">
        <div className="leave-box">
          <i className="uli-file">
            <h3 id="statmaintext"> Casual Leave</h3>
            <br/>
            <p id="statbottomtext">Available - 05 <br/> Used - 02</p>
            
          </i>
        </div>
        <div className="leave-box">
          <i className="uli-file">
            <h3 id="statmaintext"> Sick Leave</h3>
            <br/>
            <p id="statbottomtext">Available - 05 <br/> Used - 02</p>
          </i>
        </div>
        <div className="leave-box">
          <i className="uli-file">
            <h3 id="statmaintext"> All Leave </h3>
            <br/>
            <p id="statbottomtext">Available - 05 <br/> Used - 02</p>
          </i>
        </div>
      </div>
      

      <div className="leaveformdetail">
        <h1>Request Leave </h1>
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
      <br />

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
    </div>
  );
}

export default Leave;
