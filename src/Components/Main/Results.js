import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { List, Button, ListItem, ListItemText, ListSubheader, Card, CardContent } from '@material-ui/core';
import styles from './Main-css/Results.css';
import resultItem from './List-Item';
import * as _ from 'lodash';
import {member} from './List-Item';
 
class Results extends Component {

  handleSave = member => () => {
    const memberId = member.selectedMember.id;
    this.props.updateId(memberId);
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
                      console.log(`search results ${i + 1}`, resultObj)
                      return resultItem({resultObj})
                    }
                  })
                }
                
                {/* <Card elevation={10} style={styles.ButtonCard}>
                  <CardContent >
                    <ListSubheader disableSticky={false}>
                      {<Button style={styles.SaveButton}  variant="contained" color="primary"> Save </Button>}
                      {<Button style={styles.IdkButton}  variant="contained" color="primary"> Not Sure </Button>}
                    </ListSubheader>
                  </CardContent>
                  
                </Card> */}
               
              </List>


            <Grid item lg={12}>
              <Button onClick={this.handleSave(member)} style={styles.SaveButton} variant="contained" color="primary">
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