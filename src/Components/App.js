import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './Layouts';
import NoteData from './Main/Note-Data';
import Results from './Main/Results';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import * as firebase from 'firebase';
import { config } from '../firebase';

firebase.initializeApp(config);

const database = firebase.database();

class App extends Component {
  
  constructor() {
    super();
    this.getCurrentData();
    this.state = {
      data: {}
    }
  }
  
  getCurrentData() {
    const ref = database.ref().child('0');

    ref.once('value', snapshot => {
      this.setState({data: snapshot.val()});
    },
    errorObject => {
      console.log('The read failed', errorObject.code)
    })
  }

  render() {
    return <Fragment>
      <CssBaseline/>

      <Header/>

      <Grid container>
        <Grid item sm>

          <NoteData
            data={{...this.state.data}}
          />

        </Grid>
        <Grid item sm>

          <Results/>

        </Grid>
      </Grid>

      <Footer/>

    </Fragment>
  }
}

export default App;
