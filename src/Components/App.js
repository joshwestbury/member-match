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

const db = firebase.database();

class App extends Component {
  
  constructor() {
    super();
    this.getCurrentData();
    this.state = {
      data: {}
    }
  }
  
  getCurrentData() {
    const ref = db.ref();
    //const query = ref.orderByChild('Contact Name');
    const query = ref.orderByChild('InternalId').equalTo("none");
    query.once('child_added', snap => {
        console.log(snap.val())
        this.setState({data: snap.val()});
      })
  }

  updateId() {

  }

  notSure() {

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

          <Results
            updateId={this.updateId}
            notSure={this.notSure}
          />

        </Grid>
      </Grid>

      <Footer/>

    </Fragment>
  }
}

export default App;
