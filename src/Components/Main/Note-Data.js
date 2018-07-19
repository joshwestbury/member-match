import React, { Component } from 'react';
import { Grid, Paper, TextField, Card, CardContent } from '@material-ui/core';
import styles from './main-css/Note-Data.css';

class NoteData extends Component {
  
  render() {

    const member = this.props.data ? this.props.data["Contact Name"] : '';
    const rep = this.props.data ? this.props.data["User who left the Note"] : '';
    const note = this.props.data ? this.props.data["Note Content"] : '';
    const city = this.props.data["Customer Address"] ? this.props.data["Customer Address"].city : '';
    const street = this.props.data["Customer Address"] ? this.props.data["Customer Address"].line1 : '';
    const state = this.props.data["Customer Address"] ? this.props.data["Customer Address"].state : '';
    const zip = this.props.data["Customer Address"] ? this.props.data["Customer Address"].postal_code : '';
    

    return (
      <Grid>
        <Grid item lg>
          <Paper elevation={7} style={styles.Paper}>
            <Card elevation={7} style={styles.Card}>
              <CardContent>
                <form>
                  <TextField id="name"
                    label="Customer Name / Business"
                    style={styles.TextField}
                    value={`${member}`}
                    // onChange={this.handleChange('name')}
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
                    value={`${rep}`}
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
