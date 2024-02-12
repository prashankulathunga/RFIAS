import { Button, FormLabel, Table } from "react-bootstrap";
import { useRef, useState } from "react";

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
        <div className="filesubmit">
          <h1>Research submit report</h1>
          {files ? (
            <div className="uploads">
              <ul>
                {files.map((file, idx) => (
                  <li key={idx}>{file.name}</li>
                ))}
              </ul>
              <div className="actions">
                <button onClick={() => setFiles(null)}>Cancel</button>
                <button onClick={handleUpload}>Upload</button>
              </div>
            </div>
          ) : (
            <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
              <p>Drag and drop files here</p>
              <input
                type="file"
                multiple
                onChange={(event) => setFiles(Array.from(event.target.files))}
                hidden
                ref={inputRef}
              />
              <Button onClick={() => inputRef.current.click()}>Select Files</Button>
            </div>
          )}
        </div>
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
