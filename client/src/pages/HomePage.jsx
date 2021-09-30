import React from 'react';
import UploadCSVForm from '../components/UploadCSVForm';
import CustomerTable from '../components/CustomerTable';
import Container from '@mui/material/Container'


const HomePage = () => {
  return (
    <React.Fragment>
      <h1>Privy Project Home Page</h1>
      <UploadCSVForm />
      <CustomerTable />
    </React.Fragment>
  );
};

export default HomePage;