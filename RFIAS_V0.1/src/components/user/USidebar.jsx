import Udashboard from "./userdashboard.jsx";
import Research from "./research.jsx";
import Leave from "./userleave.jsx";
import Login from "../login/LoginForm.jsx";
import Clock from "../cards/clock.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Structure() {
  return (
    <>
      <Router>
        <div className="nav-outer">
          <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary navbar-light">
            <div className="container-fluid">
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
                    <Link to="/" className="navbar-text nav-link active" aria-current="page">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/research" className="nav-link">
                      Research
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/leave" className="nav-link">
                      Leave Request
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link to="/logout" className="nav-link">
                      Log-Out
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
          <Route path="/" element={<Udashboard />} />
          <Route path="/research" element={<Research  />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default Structure;
