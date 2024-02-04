import {Avatar, Button, TextField} from "@mui/material";

function Report() {
    return (

        <>
            <br/>
            <div className="container">

                <div className="employee-header col-12 col-sm-6">
                    <h5>+ Add Report</h5>
                </div>
                <hr className='col-3'/>

                <form>
                    <div className="row">

                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="filed-margin">
                                <TextField fullWidth type='number' id='rportTitle' label='Report ID'
                                           placeholder='ex:101'
                                           helperText='Please insert report id' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="filed-margin">
                                <TextField fullWidth type='text' id='rportTitle' label='Report Title'
                                           placeholder='ex:power plant'
                                           helperText='Please insert report title' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="filed-margin">
                                <TextField fullWidth type='Date' id='repDate'
                                           helperText='Please choose Date' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="filed-margin">
                                <TextField fullWidth type='file' id='rportFile'
                                           helperText='Please choose file' required/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="filed-margin">
                                <TextField fullWidth type='text' id='rportTitle' label='Note'
                                           placeholder='ex:power plant'
                                           helperText='Insert any note'/>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12 savEmpBtn">
                            <Button className='col-12' variant="contained">Save Report</Button>
                        </div>
                    </div>

                    <hr/>
                    <br/>

                    <div className="allEmpHeader col-12 col-sm-6">
                        <h5>All Reports</h5>
                    </div>
                    <hr className='col-3'/>

                    <div className="row">
                        <div className="search-outer col-12">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="filed-margin">
                                    <TextField fullWidth type='search' id='serchRport' label="Search Report ID"
                                               variant="standard"
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
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Date</th>
                                <th scope="col">Any Note</th>
                                <th scope="col">Report</th>
                                <th scope="col">Options</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>001</td>
                                <td>Power Plant</td>
                                <td>20/03/2024</td>
                                <td>NULL</td>
                                <td>File</td>
                                <td>
                                    <div className="optionBtn">
                                        <Button variant="contained" color='success' size="small">Update</Button>
                                        <Button variant="contained" color='error' size="small">Delete</Button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>002</td>
                                <td>Virus-UXI</td>
                                <td>07/01/2022</td>
                                <td>NULL</td>
                                <td>File</td>
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

export default Report;