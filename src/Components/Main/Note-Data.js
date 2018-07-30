import React, { Component } from 'react';
import { Grid, Paper, TextField, Card, CardContent } from '@material-ui/core';
import styles from './Main-css/Note-Data.css';
import * as _ from 'lodash';

class NoteData extends Component {
  
  render() {
    
    const member = _.get(this.props.data, 'Contact Name', 'No Member Name');
    const partnerName = _.get(this.props.data, 'User who left the Note', "No Partner Name");
    const note = _.get(this.props.data, 'Note Content', 'No Note data');
    const city = _.get(this.props.data, 'Customer Address.city', '')
    const street = _.get(this.props.data, 'Customer Address.line1', '');
    const state = _.get(this.props.data, 'Customer Address.state', '');
    const zip = _.get(this.props.data, 'Customer Address.postal_code', '');
    
    return (
      <Grid container>
        <Grid item lg={12}>
          <Paper elevation={7} style={styles.Paper}>
            <Grid container>
              <Grid item lg={3}>
              </Grid>
              <Grid item lg={6}>
                <Card elevation={7} style={styles.Card}>
                  <CardContent>
                    <TextField id="name"
                      label="Customer Name / Business"
                      style={styles.TextField}
                      multiline
                      rowsMax="50"
                      value={`${member}`}
                      margin="normal"
                    />
                    <TextField
                      id="name"
                      label="Customer Address"
                      style={styles.TextField}
                      multiline
                      rowsMax="50"
                      value={`${street},  ${city},  ${state},  ${zip}`}
                      margin="normal"
                    />
                    <TextField
                      id="name"
                      label="Partner Name"
                      style={styles.TextField}
                      value={`${partnerName}`}
                      margin="normal"
                    />
                    <TextField
                      id="multiline-flexible"
                      label="Note Content"
                      multiline
                      rowsMax="50"
                      style={styles.TextField}
                      value={`${note}`}
                      margin="normal"
                    />                  
                  </CardContent>  
                </Card>
              </Grid> 
                {/* <Grid item lg={2}>
                </Grid>  */}
            </Grid>
          </Paper>
        </Grid> 
      </Grid>
    )
  }
}

export default NoteData;
