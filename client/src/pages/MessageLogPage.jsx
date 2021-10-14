import React from 'react';
import MessageTable from '../components/MesssageTable';
import Navbar from '../components/NavBar/NavBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom'
import Toast from '../components/Toast/Toast';



const MessageLogPage = () => {

  const data = useLocation()
  const { isRedirect } = data.state ? data.state : false

  console.log(data)

  return (
    <React.Fragment>
      <Navbar />
      <Box className='main-wrapper'>
        <Box className="top-content">
          <Typography color='primary' variant="h2" fontWeight='bold'>
            Message Log
          </Typography>
        </Box>
        <MessageTable />
        <Toast message={'Message Sent!'} isOpen={isRedirect ? true : false} />
      </Box>
    </React.Fragment>
  );
};

export default MessageLogPage;