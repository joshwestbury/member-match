import React from 'react';
import { Grid, Paper, TextField, Card, CardContent } from '@material-ui/core';
import styles from './main-css/Note-Data.css';


const NoteData = props => {
  const member = props.data[0]["Contact Name"];
  const rep = props.data[0]["User who left the Note"];
  const note = props.data[0]["Note Content"]
  return (
    <Grid container={styles.Container}>
      <Grid item lg>
        <Paper elevation={7} style={styles.Paper}>
          <Card elevation={7} style={styles.Card}>
            <CardContent>
              <form>
                <TextField id="name"
                  label="Customer Name / Business"
                  style={styles.TextField}
                  value={member}
                  // onChange={this.handleChange('name')}
                  margin="normal"
                />
                <TextField
                  id="name"
                  label="Customer Address"
                  style={styles.TextField}
                  value={'Address Line'}
                  // onChange={this.handleChange('name')}
                  margin="normal"
                />
                <TextField
                  id="name"
                  label="Partner Name"
                  style={styles.TextField}
                  value={rep}
                  // onChange={}
                  margin="normal"
                />
                <TextField
                  id="multiline-flexible"
                  label="Note Content"
                  multiline
                  rowsMax="50"
                  style={styles.TextField}
                  value={note}
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

export default NoteData;
