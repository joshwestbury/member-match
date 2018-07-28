import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { List, Button } from '@material-ui/core';
import styles from './main-css/Results.css';
import resultItem from './List-Item';
import * as _ from 'lodash';

class Results extends Component {

  handleSave = () => {
    //this.props.updateId();
  }

  handleNotSure = () => {
    this.props.notSure();
  }

  render() {
    //const results = this.props.results.concat(this.props.results).concat(this.props.results).concat(this.props.results).concat(this.props.results)
  
    console.log('results data: ', this.props.results)
    return (
      <Grid container>
        <Grid item lg={12}>
          <Paper elevation={7} style={styles.Paper}>
            <Typography
              variant="display1"
            >
              Select the option that best matches
              the customer on the left
            </Typography>
            <List>
              {
                this.props.results.map((resultObj, index) => {
                  return resultItem({resultObj})
                })
              }
            </List>
            <Grid item lg={12}>
              <Button onClick={this.handleSave} style={styles.SaveButton} variant="contained" color="primary">
                Save
              </Button>
              <Button onClick={this.handleNotSure} style={styles.IdkButton}  variant="contained" color="primary">
                I'm not sure
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    )


  }
}

export default Results;