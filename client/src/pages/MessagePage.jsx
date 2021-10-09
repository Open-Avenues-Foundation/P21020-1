import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Box, TextField } from '@mui/material'
import MessageTextBox from '../components/MessageTextBox';
import Navbar from '../components/NavBar/NavBar';
import { Container } from '@mui/material';


const MessagePage = () => {
  const data = useLocation()
  const { selectedCustomers } = data.state

  console.log(selectedCustomers)

  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="xl">
        <h1>Craft a Message</h1>
        <MessageTextBox selectedCustomers={selectedCustomers} />
      </Container>
    </React.Fragment>
  );
};

export default MessagePage;