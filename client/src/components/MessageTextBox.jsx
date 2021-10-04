import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import axios from 'axios'

const MessageTextBox = (props) => {
  const [messageText, setMessageText] = useState('')

  const handleChange = e => {
    setMessageText(e.target.value)
  }

  const sendMessage = () => {
    const data = { message: messageText, selectedCustomers: props.selectedCustomers }
    console.log(data)
    axios.post('http://localhost:1337/api/customers/message', data)
      .then(res => {
        console.log(res.statusText)
      })
      .catch(err => {
        console.log('Error sending text message', err)
      })
  }


  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-multiline-static"
          label="Craft Text Message"
          multiline
          rows={4}
          variant="filled"
          onChange={handleChange}
          value={messageText}
        />
      </Box>
      <Button variant="contained" onClick={sendMessage}>Send Message</Button>
    </React.Fragment >
  );
};

export default MessageTextBox;