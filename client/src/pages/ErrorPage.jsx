import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import { Container } from '@mui/material';

const NoMatch = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <h1>Page not found</h1>
      </Container>
    </div>
  );
};

export default NoMatch;