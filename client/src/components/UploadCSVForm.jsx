import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from 'react-bootstrap'

const UploadCSVForm = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileName, setFileName] = useState('Upload CSV File')

  const uploadFile = e => {
    console.log(e.target.files[0])
    setFileName(e.target.files[0].name)
    setSelectedFile(e.target.files[0])
  }


  const sendFile = () => {
    const data = new FormData()
    data.append('file', selectedFile)
    axios.post('http://localhost:1337/api/csv/upload', data)
      .then(res => {
        console.log(res.statusText)
        window.location.reload()
      })
      .catch(err => {
        console.log('CSV File upload error frontend', err)
      })
  }

  return (
    // <form id="upload-csv-form">
    //   <input type="file" id="upload-csv-file" onChange={uploadFile} />
    //   <button type="button" className="btn upload-btn" onClick={sendFile}>Upload</button>
    // </form>
    <Form className="mb-3 d-flec d-inline-flex ">
      <Button variant="primary" onClick={sendFile}>Upload</Button>
      <Form.File id="upload-csv-file" label={fileName} onChange={uploadFile} custom />
    </Form>

  )
}


export default UploadCSVForm;

