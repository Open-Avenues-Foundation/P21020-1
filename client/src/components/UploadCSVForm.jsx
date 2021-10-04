import React, { useState } from "react";
import axios from "axios";
// import Form from 'react-bootstrap/Form'
import { Button, Box } from '@mui/material'


const UploadCSVForm = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileNameDisplay, setFileNameDisplay] = useState('Upload CSV File')

  const uploadFile = e => {
    console.log(e.target.files[0])
    setFileNameDisplay(e.target.files[0].name)
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
    <React.Fragment>
      <Box sx={{ display: 'flex', mb: '1rem' }}>
        <input
          style={{ display: "none" }}
          id="upload-csv-file"
          type="file"
          onChange={uploadFile}
        />
        <label htmlFor="upload-csv-file">
          <Button variant="outlined" color="primary" component="span" style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}>
            Browse
          </Button>
        </label>
        <Box sx={{ width: '25%', bgcolor: 'lightgray', display: 'flex', alignItems: 'center', pl: '1rem', border: '3px solid lightgray', typography: 'subtitle2' }}>{fileNameDisplay}</Box>
        <Button style={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }} variant="contained" disableElevation onClick={sendFile}>Upload</Button>
      </Box>
    </React.Fragment>


  )
}


export default UploadCSVForm;