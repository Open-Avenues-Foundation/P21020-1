import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';

const MessageTextBox = () => {
  const [messageText, setMessageText] = useState('')

  const handleChange = e => {
    setMessageText(e.target.value)
  }


  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          maxRows={4}
        />
      </Box>
    </React.Fragment >
  );
};

export default MessageTextBox;