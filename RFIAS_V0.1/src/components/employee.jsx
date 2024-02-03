import {
    Avatar,
    Button,
    FormControl,
    FormControlLabel, FormHelperText,
    FormLabel,
    InputLabel, MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField
} from "@mui/material";

function Employee() {
    return (
        <>
            <br/>
            <div className="container">

                <div className="employee-header col-12 col-sm-6">
                    <h5>+ Add New Researcher</h5>
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
                                <TextField fullWidth type='text' id='empFName' label='First Name'
                                           placeholder='ex:Prashan'
                                           helperText='Please insert first name' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <TextField fullWidth type='text' id='empLName' label='Last Name'
                                           placeholder='ex:Kulathunga'
                                           helperText='Please insert last name' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group">
                                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                </RadioGroup>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <TextField fullWidth type='Date' id='empDob'
                                           helperText='Please choose Birth Date' required/>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <TextField fullWidth type='email' id='empEMail' label='E Mail'
                                           placeholder='ex:p@183gmail.com'
                                           helperText='Please insert email address' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <TextField fullWidth type='number' id='empNumber' label='Mobile Number'
                                           placeholder='ex:077-8506262'
                                           helperText='Please insert mobile number' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <TextField fullWidth type='text' id='empAdStreet' label='Street'
                                           placeholder='ex:No:26, Sampathwatta'
                                           helperText='Please insert street' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <TextField fullWidth type='text' id='empAdCity' label='City'
                                           placeholder='ex:Embilipitiya'
                                           helperText='Please insert city' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <TextField fullWidth type='text' id='empAdPostCode' label='Postal Code'
                                           placeholder='ex:70200'
                                           helperText='Please insert postal code' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Designation</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Designation">
                                        <MenuItem defaultValue="">None</MenuItem>
                                        <MenuItem value='Researcher'>Researcher</MenuItem>
                                        <MenuItem value='Professor'>Professor</MenuItem>
                                    </Select>
                                    <FormHelperText>Please select designation</FormHelperText>
                                </FormControl>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="filed-margin">
                                <TextField fullWidth type='file' id='rportFile'
                                           helperText='Please choose image' required/>
                            </div>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-12 savEmpBtn">
                            <Button className='col-12' variant="contained">Save Researcher</Button>
                        </div>
                    </div>

                    <hr/>
                    <br/>

                    <div className="allEmpHeader col-12 col-sm-6">
                        <h5>All Researchers</h5>
                    </div>
                    <hr className='col-3'/>

                    <div className="row">
                        <div className="search-outer col-12">
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="filed-margin">
                                    <TextField fullWidth type='search' id='serchEmp' label="Search Resercher's NIC" variant="standard"
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
                            <th scope='col'></th>
                            <th scope="col">Nic</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Dob</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Options</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td><Avatar>SA</Avatar></td>
                            <td>2002651725971V</td>
                            <td>Siyadoris Appuhami</td>
                            <td>Male</td>
                            <td>20/06/1980</td>
                            <td>notysiyadoris@gmail.com</td>
                            <td>077-5348641</td>
                            <td>Colombo,Sri Lanka</td>
                            <td>Researcher</td>
                            <td>
                                <div className="optionBtn">
                                    <Button variant="contained" color='success' size="small">Update</Button>
                                    <Button variant="contained" color='error' size="small">Delete</Button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><Avatar>NM</Avatar></td>
                            <td>2002651065971V</td>
                            <td>Noty Madu</td>
                            <td>Female</td>
                            <td>08/11/1993</td>
                            <td>madu123@gmail.com</td>
                            <td>077-5375839</td>
                            <td>Panadura,Sri Lanka</td>
                            <td>Researcher</td>
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

export default Employee;