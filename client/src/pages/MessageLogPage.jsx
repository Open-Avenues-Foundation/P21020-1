import React, { useState, useEffect } from 'react';
import MessageTable from '../components/MesssageTable';
import { useLocation } from 'react-router-dom'



const MessageLogPage = () => {

  return (
    <React.Fragment>
      <h1>Message Page</h1>
      <MessageTable />
    </React.Fragment>
  );
};

export default MessageLogPage;