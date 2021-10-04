import React from 'react';
import { Container } from '@mui/material'

const Layout = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default Layout;