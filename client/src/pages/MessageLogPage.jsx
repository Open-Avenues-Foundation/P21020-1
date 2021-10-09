import React, { useState, useEffect } from 'react';
import MessageTable from '../components/MesssageTable';
import { useLocation } from 'react-router-dom'
import Navbar from '../components/NavBar/NavBar';
import { Container } from '@mui/material';



const MessageLogPage = () => {

  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="xl">
        <h1>Message Page</h1>
        <MessageTable />
      </Container>
    </React.Fragment>
  );
};

export default MessageLogPage;