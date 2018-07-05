import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './Layouts';
import NoteData from './Main/Note-Data';
import Results from './Main/Results';
import CssBaseline from '@material-ui/core/CssBaseline';
import { data } from '../data.js';
import { Grid } from '@material-ui/core';

class App extends Component {
  state = {data}

  getCurrentData() {
    return this.state.data
  }

  render() {
    console.log(this.getCurrentData())
    return <Fragment>
      <CssBaseline/>

      <Header/>

      <Grid container>
        <Grid item sm>

          <NoteData
            data={this.state.data}
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
