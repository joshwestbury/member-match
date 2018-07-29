import React from 'react';
import { Paper } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import styles from './Layout-css/Footer.css';

const Footer = props => {
  return (
    <Paper style={styles.Paper} elevation={7}>
      
      <Tab label="Copywrite © 2018 NWYC"/>
      
    </Paper>
  )
}
  



export default Footer;
