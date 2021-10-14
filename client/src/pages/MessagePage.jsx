import React from 'react';
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import MessageTextBox from '../components/MessageTextBox/MessageTextBox';
import Navbar from '../components/NavBar/NavBar';
import { Typography } from '@mui/material';
import Footer from '../components/Footer/Footer';


const MessagePage = () => {
  const data = useLocation()
  const { selectedCustomers } = data.state

  console.log(selectedCustomers)

  return (
    <React.Fragment>
      <Navbar />
      <Box className='main-wrapper message-page'>
        <Typography color='primary' variant="h2" fontWeight='bold' sx={{ textAlign: 'center' }}>
          Send A Message
        </Typography>
        <MessageTextBox selectedCustomers={selectedCustomers} />
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default MessagePage;