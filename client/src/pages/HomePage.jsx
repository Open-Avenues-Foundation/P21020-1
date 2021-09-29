import React from 'react';
import UploadCSVForm from '../components/UploadCSVForm';
import CustomerTable from '../components/CustomerTable';
import { Container, Row, Col } from 'react-bootstrap'

const HomePage = () => {
  return (
    <div>
      <Container>

        <h1>Privy Project Home Page</h1>
        <UploadCSVForm />
        <CustomerTable />

      </Container>
    </div>
  );
};

export default HomePage;