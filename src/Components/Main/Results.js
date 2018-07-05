import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { List, ListItem, ListItemText, Checkbox, Button } from '@material-ui/core';


const styles = {
  Paper: {
    height: 1300,
    padding: 60,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
    textAlign: 'center',
  },
  List: {
    width: 300,
    marginTop: 85,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 150
  },
  SaveButton: {
    padding: 10,
    paddingLeft:  50,
    paddingRight: 50,
    margin: 20,
    backgroundColor: '#E91E63',
    size: 'medium'
  },
  IdkButton: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 20,
    backgroundColor: '#2196F3'
  }
}

const Results = props => {
  return (
    <Grid container>
      <Grid item lg>
        <Paper elevation={7} style={styles.Paper}>
          <Typography
            variant="display1"
          >
            Select the option that best matches
            the customer on the left
          </Typography>
          <Grid item lg>
            <List style={styles.List}>
              {[0, 1, 2, 3].map(value => (
                <ListItem
                  key={value}
                  role={undefined}
                  dense
                  button
                  //onClick={this.handleToggle(value)}
                  //className={classes.listItem}
                >
                  <Checkbox
                    //checked={this.state.checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={`Results Line ${value + 1}`} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item lg>
            <Button style={styles.SaveButton} variant="contained" color="primary">
              Save
            </Button>
            <Button style={styles.IdkButton} variant="contained" color="primary">
              I'm not sure
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}


export default Results;
