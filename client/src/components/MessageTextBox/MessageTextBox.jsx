import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import axios from 'axios'

const MessageTextBox = (props) => {
  const [messageText, setMessageText] = useState('')
  const [isMessage, setIsMessage] = useState(false)

  const handleChange = e => {
    setMessageText(e.target.value)

    if (e.target.value.length > 0) {
      setIsMessage(true)
    } else {
      setIsMessage(false)
    }
  }

  const sendMessage = () => {
    const data = { message: messageText, selectedCustomers: props.selectedCustomers }
    console.log(data)
    axios.post('http://localhost:1337/api/message', data)
      .then(res => {
        console.log(res.statusText)
      })
      .catch(err => {
        console.log('Error sending text message', err)
      })
  }


  return (
    <React.Fragment>
      <TextField
        id="filled-multiline-static"
        label="Craft Text Message Here"
        multiline
        rows={4}
        variant="outlined"
        onChange={handleChange}
        value={messageText}
        fullWidth
        sx={{ maxWidth: '500px' }}
        margin='normal'
      />
      <Button
        sx={{ width: '100%', maxWidth: '500px' }}
        variant="contained"
        onClick={sendMessage}
        disabled={!isMessage}
      >
        Send Message
      </Button>
    </React.Fragment >
  );
};

export default MessageTextBox;