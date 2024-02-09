import {
  Avatar,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
function signup() {
  retrun(
    <>
      <br />

      <div className="container">
        <form action="">
          <div className="header">
            <h1> Signin</h1>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Employee NIC" required></input>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Employee email" required></input>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Username" required></input>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required></input>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm password"
              required
            ></input>
          </div>

          <button type="submit"> Register</button>

          <div className="backtologin">
            <p>
              {" "}
              <a href="#">Back to Login</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default signup;
