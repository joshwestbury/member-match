import React from 'react';
import { Grid, Paper, TextField } from '@material-ui/core';


const styles = {
  Container: {
    display: 'flex'
  },
  Paper: {
    height: 1300,
    padding: 80,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  TextField: {
    width: 300,
    marginTop: 85,
    marginLeft:  150,
    marginBottom: 10,
    marginRight: 150
  }
}

const NoteData = props => {
  const member = props.data[0]["Contact Name"];
  const rep = props.data[0]["User who left the Note"];
  const note = props.data[0]["Note Content"]
  return (
    <Grid container={styles.Container}>
      <Grid item lg>
        <Paper elevation={7} style={styles.Paper}>
          <Grid item lg={4}>
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
                rowsMax="4"
                style={styles.TextField}
                value={note}
                //onChange={}
                margin="normal"
              />
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default NoteData;
