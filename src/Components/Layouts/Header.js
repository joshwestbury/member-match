import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = (props) => {
  return (
    <AppBar position="static" style={{backgroundColor: '#2196F3'}}>
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Member Match
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
