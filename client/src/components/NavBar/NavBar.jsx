import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <AppBar color="primary" position="sticky" >
      <Toolbar>
        <Link to={{
          pathname: '/',
        }}>
          <Logo />
        </Link>
      </Toolbar>
    </AppBar >

  )

}

export default Navbar;