import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { List, Button, Card } from '@material-ui/core';
import styles from './Main-css/Results.css';
import ResultItem from './List-Item';
import * as _ from 'lodash';
 
class Results extends Component {
  state = {
    selectedIndex: null,
    selectedMemberId: null
  }

  handleCheckbox = (selectedIndex, memberId) => {
    this.setState({selectedIndex: selectedIndex}, () => {
      console.log('handle checkbox state', this.state);
    });
    this.setState({selectedMemberId: memberId});
  }

  handleSave = (selectedMemberId) => {
    console.log(this.state.selectedMemberId);
    this.props.updateId(this.state.selectedMemberId);
  }

  handleNotSure = () => {
    this.props.notSure();
  }
  
  render() {
    //const finalResults = this.props.results.concat(this.props.results).concat(this.props.results).concat(this.props.results).concat(this.props.results)
    const searchResults = this.props ? this.props.results : '';
    const finalResults = _.uniqBy(searchResults, 'id');
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
              <List subheader={<Card />} >
                {
                  finalResults.map((resultObj, i) => {
                    const donorId = _.get(resultObj, 'values.custentity_cust_relateddonor[0].value');
                    const memberId = _.get(resultObj, 'id');
                    resultObj.key = i;
                    if (memberId === donorId) {
                        return <ResultItem resultObj={resultObj} handleCheckbox={this.handleCheckbox} selectedIndex={this.state.selectedIndex} />
                      }
                  })
                } 
              </List>
            <Grid item lg={12}>
              <Button onClick={() => this.handleSave(this.state.selectedMemberId)} style={styles.SaveButton} variant="contained" color="primary">
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