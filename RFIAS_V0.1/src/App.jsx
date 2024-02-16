import Udashboard from "./components/user/userdashboard.jsx";
import Attendance from "./components/attendance.jsx";
import Employee from "./components/employee.jsx";
import Report from "./components/reports.jsx";
import Signup from "./components/login/signup.jsx";


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Clock from "./components/cards/clock.jsx";
import Salary from "./components/salary.jsx";

function Dashboard() {
  return (
    <>
      <Router>
        <div className="nav-outer">
          <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary navbar-light">
            <div className="container-fluid">
              {/*<Link to='/home' className="navbar-brand logo-outer">
                                <img
                                  //  src="https://static.vecteezy.com/system/resources/previews/004/996/073/original/face-recognition-and-identification-line-icon-face-id-line-icon-facial-scan-and-identification-facial-recognition-system-sign-biometric-facial-detection-pictogram-illustration-vector.jpg"
                                    alt="logo"/>
                            </Link>*/}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="navbar-text nav-link active"
                      aria-current="page"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/employee" className="nav-link">
                      Researcher
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/attendance" className="nav-link">
                      Attendance
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/salary" className="nav-link">
                      Salary
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/report" className="nav-link">
                      Report
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="clock-outer">
              <div className="container">
                <Clock />
                <hr />
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Udashboard />}></Route>
          <Route path="/attendance" element={<Attendance />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/salary" element={<Salary />}></Route>
          <Route path="/report" element={<Report />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default Dashboard;
