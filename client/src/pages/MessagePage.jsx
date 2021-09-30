import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Box, TextField } from '@mui/material'
import MessageTextBox from '../components/MessageTextBox';


const MessagePage = () => {
  const data = useLocation()
  // const { selectedCustomers } = data.state

  // console.log(selectedCustomers)

  return (
    <React.Fragment>
      <h1>Craft a Message</h1>
      <MessageTextBox />
    </React.Fragment>
  );
};

export default MessagePage;