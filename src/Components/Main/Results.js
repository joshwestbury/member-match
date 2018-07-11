import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { List, ListItem, ListItemText, Checkbox, Button, CardActions, CardContent, Card } from '@material-ui/core';
import styles from './main-css/Results.css';

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
          <div>
            <Card elevation={7} style={styles.Card}>
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText primary={"Name:"} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={"Address:"} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={"Partner Name:"} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={"Recipients:"} />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions style={styles.CheckBox}>
                <Checkbox
                    //checked={this.state.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  />
              </CardActions>
            </Card>
          </div>

          <div>
              <Card elevation={7} style={styles.Card}>
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText primary={"Name:"} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={"Address:"} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={"Partner Name:"} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={"Recipients:"} />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions>
                <Checkbox
                  //checked={this.state.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </CardActions>
            </Card>
          </div>

          <div>
              <Card elevation={7} style={styles.Card}>
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText primary={"Name:"} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={"Address:"} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={"Partner Name:"} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={"Recipients:"} />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions>
                <Checkbox
                  //checked={this.state.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </CardActions>
            </Card>
          </div>

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
