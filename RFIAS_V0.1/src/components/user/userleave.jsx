import Table from 'react-bootstrap/Table'
function Leave() {
    return (
        <div className="page">

        <div className="formdetail">
            <h1>Request Leave </h1>

            <input type="date" id="requstdate" placeholder="Request Date" />
            <input type="text" id="leavetype" placeholder="Leave type" />
            <input type="date" id="leaveto" placeholder="Leave To" />
            <input type="date" id="leavefrom" placeholder="Leave From" />
            <input type="text" id="reason" placeholder="Reason for leave"/>
            <br></br>

            <button type="submit" id="submitleave"> submit </button>
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
                <tbody>
            
                    
                </tbody>
            </Table>


        </div>
        </div>



    )
}

export default Leave;