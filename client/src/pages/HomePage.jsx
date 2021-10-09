import React from 'react';
import UploadCSVForm from '../components/UploadCSVForm';
import CustomerTable from '../components/CustomerTable';
import Navbar from '../components/NavBar/NavBar';
import { Container } from '@mui/material';

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="xl">
        <h1>Privy Project Home Page</h1>
        <UploadCSVForm />
        <CustomerTable />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;