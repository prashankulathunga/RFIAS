import { Button, FormLabel, Table } from "react-bootstrap";
import { useRef, useState } from "react";
import "./research.css";

import { MdIncompleteCircle } from "react-icons/md";
import { MdOutlineHourglassTop } from "react-icons/md";
import { RiStopCircleLine } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
function Research() {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(Array.from(event.dataTransfer.files));
  };

  const handleUpload = () => {};

  return (
    <div className="page">
      <div className="leavepgboxes">
        <div className="box">
          <i className="uli-file">
            <h3 id="statmaintext">
              {" "}
              <MdIncompleteCircle />
              Complete{" "}
            </h3>
            <p id="statbottomtext">05</p>
          </i>
        </div>
        <div className="box">
          <i className="uli-file">
            <h3 id="statmaintext">
              {" "}
              <MdOutlineHourglassTop /> Running{" "}
            </h3>
            <p id="statbottomtext">02</p>
          </i>
        </div>
        <div className="box">
          <i className="uli-file">
            <h3 id="statmaintext"><CiViewList /> Total Research </h3>
            <p id="statbottomtext">05</p>
          </i>
        </div>
        <div className="box">
          <i className="uli-file">
            <h3 id="statmaintext">
              {" "}
              <RiStopCircleLine />
              Hold
            </h3>
            <p id="statbottomtext">05</p>
          </i>
        </div>
      </div>
      <br />

      <div className="filesubmit">
        <br />
        <h3>Research submit report</h3>
        <br />

        {files ? (
          <div className="uploads">
            <ul>
              {files.map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
            <div className="actions">
              <button onClick={() => setFiles(null)} className="selectcancel">
                Cancel
              </button>{" "}
              {""}
              <button onClick={handleUpload} className="selectupload">
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div
            className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <p>Drag and drop files here</p>
            <input
              className="inputdropzone"
              type="file"
              multiple
              onChange={(event) => setFiles(Array.from(event.target.files))}
              hidden
              ref={inputRef}
            />
            <Button onClick={() => inputRef.current.click()}>
              Select Files
            </Button>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <div className="researchoverview">
        <h1>Research overview</h1>

        <br></br>
        <Table responsive>
          <thead>
            <tr>
              <th>Research ID</th>
              <th>Submit Date</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
}


import { Button, FormLabel, Table } from "react-bootstrap";
import { useRef, useState } from "react";
import "./research.css";

function Research() {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(Array.from(event.dataTransfer.files));
  };

  const handleUpload = () => {};

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
      <br />

      <div className="filesubmit">
        <br />
        <h3>Research submit report</h3>
        <br />
        

        {files ? (
          <div className="uploads">
            <ul>
              {files.map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
            <div className="actions">
              <button onClick={() => setFiles(null)} className="selectcancel">
                Cancel
              </button>{" "}
              {""}
              <button onClick={handleUpload} className="selectupload">
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div
            className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <p>Drag and drop files here</p>
            <input
              className="inputdropzone"
              type="file"
              multiple
              onChange={(event) => setFiles(Array.from(event.target.files))}
              hidden
              ref={inputRef}
            />
            <Button onClick={() => inputRef.current.click()}>
              Select Files
            </Button>
          </div>
        )}
      </div>
      <br/>
      <br/>
      <br/>
      <div className="researchoverview">
        <h1>Research overview</h1>

        <br></br>
        <Table responsive>
          <thead>
            <tr>
              <th>Research ID</th>
              <th>Submit Date</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
}

export default Research;
