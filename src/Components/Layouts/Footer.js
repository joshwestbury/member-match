import React from 'react';
import { Paper, Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

const Footer = props => {
  return (
    <Paper elevation={7}>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
      >
      <Tab label="Copywrite © 2018 NWYC"/>
      </Tabs>
    </Paper>
  )
}
  



export default Footer;
