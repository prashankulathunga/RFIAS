import {Avatar, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@mui/material";

function Attendance(){
    return(
        <>
            <br/>
            <div className="container">

                <div className="employee-header col-12 col-sm-6">
                    <h5>+ Mark Attendance</h5>
                </div>
                <hr className='col-3'/>

                <form>
                    <div className="row">

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <TextField fullWidth type='text' id='empNic' label='Employee NIC'
                                           placeholder='ex:200213398V'
                                           helperText='Please insert NIC number' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <TextField fullWidth type='text' id='empName' label='Researcher Name'
                                           disabled={true}/>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <TextField fullWidth type='Date' id='empAttDate'
                                           helperText='Please choose Date' required/>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Attendance</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Designation">
                                        <MenuItem defaultValue="">None</MenuItem>
                                        <MenuItem value='1'>Present</MenuItem>
                                        <MenuItem value='HF'>Late</MenuItem>
                                        <MenuItem value='0'>Absent</MenuItem>
                                    </Select>
                                    <FormHelperText>Please select attendance</FormHelperText>
                                </FormControl>
                            </div>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-12 savEmpBtn">
                            <Button className='col-12' variant="contained">Mark Attendance</Button>
                        </div>
                    </div>

                    <hr/>
                    <br/>

                    <div className="allEmpHeader col-12 col-sm-6">
                        <h5>All Attendance</h5>
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
                    <table className='table table-hover col-12'>
                        <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Nic</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Attendance</th>
                            <th scope="col">Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Avatar>SA</Avatar></td>
                            <td>2002651725971V</td>
                            <td>Siyadoris Appuhami</td>
                            <td>20/06/2024</td>
                            <td>1</td>
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
                            <td>0</td>
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
        </>
    );
}
export default Attendance;