import {Avatar, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@mui/material";

function Salary(){

    return(
        <>
            <br/>
            <div className="container">

                <div className="employee-header col-12 col-sm-6">
                    <h5>+ Add Salary</h5>
                </div>
                <hr className='col-3'/>


                <form>
                    <div className="row">

                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="filed-margin">
                                <TextField fullWidth type='text' id='empNic' label='Employee NIC'
                                           placeholder='ex:200213398V'
                                           helperText='Please insert NIC number' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="filed-margin">
                                <TextField fullWidth type='text' id='empName' label='Researcher Name'
                                           disabled={true}/>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="filed-margin">
                                <TextField fullWidth type='Date' id='empAttDate'
                                           helperText='Please choose Date' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="filed-margin">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Salary Month</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Salary Month">
                                        <MenuItem defaultValue="">None</MenuItem>
                                        <MenuItem value='January'>January</MenuItem>
                                        <MenuItem value='February'>February</MenuItem>
                                        <MenuItem value='March'>March</MenuItem>
                                        <MenuItem value='April'>April</MenuItem>
                                        <MenuItem value='May'>May</MenuItem>
                                        <MenuItem value='June'>June</MenuItem>
                                        <MenuItem value='July'>July</MenuItem>
                                        <MenuItem value='August'>August</MenuItem>
                                        <MenuItem value='September'>September</MenuItem>
                                        <MenuItem value='October'>October</MenuItem>
                                        <MenuItem value='November'>November</MenuItem>
                                        <MenuItem value='December'>December</MenuItem>
                                    </Select>
                                    <FormHelperText>Please select salary month</FormHelperText>
                                </FormControl>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="filed-margin">
                                <TextField fullWidth type='number' id='SalCount' label='Salary'
                                           placeholder='ex:20000.00'
                                           helperText='Please insert salary' required/>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12 savEmpBtn">
                            <Button className='col-12' variant="contained">Set Salary</Button>
                        </div>
                    </div>

                    <hr/>
                    <br/>

                    <div className="allEmpHeader col-12 col-sm-6">
                        <h5>All Salary Details</h5>
                    </div>
                    <hr className='col-3'/>

                    <div className="row">
                        <div className="search-outer col-12">
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="filed-margin">
                                    <TextField fullWidth type='search' id='serchEmp' label="Search Resercher's NIC"  variant="standard"
                                               size='small'
                                               placeholder='search here'/>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>


                <div className=" table-outer col-12">
                    <div className="table-wrapper">
                        <table className='table table-hover col-12'>
                            <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Nic</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Salary Month</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Options</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><Avatar>SA</Avatar></td>
                                <td>2002651725971V</td>
                                <td>Siyadoris Appuhami</td>
                                <td>20/03/2024</td>
                                <td>March</td>
                                <td>45000.00</td>
                                <td>
                                    <div className="optionBtn">
                                        <Button variant="contained" color='success' size="small">Update</Button>
                                        <Button variant="contained" color='error' size="small">Delete</Button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><Avatar>NP</Avatar></td>
                                <td>2002861725971V</td>
                                <td>Notheris Appuhami</td>
                                <td>07/01/2024</td>
                                <td>January</td>
                                <td>67000.00</td>
                                <td>
                                    <div className="optionBtn">
                                        <Button variant="contained" color='success' size="small">Update</Button>
                                        <Button variant="contained" color='error' size="small">Delete</Button>
                                    </div>
                                </td>
                            </tr>

                            </tbody>


                        </table>
                    </div>
                </div>



            </div>

        </>
    );

}


export default Salary;
