import React, { useState } from "react";
import axios from "axios";

const UploadCSVForm = () => {
  const [selectedFile, setSelectedFile] = useState(null)

  const uploadFile = e => {
    console.log(e.target.files[0])
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
    <form id="upload-csv-form">
      <input type="file" id="upload-csv-file" onChange={uploadFile} />
      <button type="button" className="btn upload-btn" onClick={sendFile}>Upload</button>
    </form>
  )
}

export default UploadCSVForm;

