import React, { Component } from 'react';
import { Grid, Paper, TextField, Card, CardContent } from '@material-ui/core';
import styles from './main-css/Note-Data.css';
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
   // const state = this.props.data["Customer Address"] ? this.props.data["Customer Address"].state : '';
    //const zip = this.props.data["Customer Address"] ? this.props.data["Customer Address"].postal_code : '';
    

    return (
      <Grid container>
        <Grid item lg={12}>
          <Paper elevation={7} style={styles.Paper}>
            <Card elevation={7} style={styles.Card}>
              <CardContent>
                <form>
                  <TextField id="name"
                    label="Customer Name / Business"
                    style={styles.TextField}
                    value={`${member}`}
                    margin="normal"
                  />
                  <TextField
                    id="name"
                    label="Customer Address"
                    style={styles.TextField}
                    value={`${street},  ${city},  ${state},  ${zip}`}
                    // onChange={this.handleChange('name')}
                    margin="normal"
                  />
                  <TextField
                    id="name"
                    label="Partner Name"
                    style={styles.TextField}
                    value={`${partnerName}`}
                    // onChange={}
                    margin="normal"
                  />
                  <TextField
                    id="multiline-flexible"
                    label="Note Content"
                    multiline
                    rowsMax="50"
                    style={styles.TextField}
                    value={`${note}`}
                    //onChange={}
                    margin="normal"
                  />
                </form>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default NoteData;
