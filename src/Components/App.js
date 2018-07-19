import './App.css';
import { config } from '../firebase';
import * as firebase from 'firebase';
import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import NoteData from './Main/Note-Data';
import Results from './Main/Results';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';

firebase.initializeApp(config);
const db = firebase.database();

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    }
  }

  componentWillMount = async () => {
    await this.getAddress();
    this.getFirebaseData();
    
  }

  componentDidMount = () => {
   
  }

  getAddress = async () => {
    const ref = db.ref();
    const query = ref.orderByChild('InternalId').equalTo("none");
    await query.once('child_added', snap => {
        const id = snap.val()['Contact ID'];
        //console.log(id);
        this.callBase(id)
          .then(address => {
            snap.ref.update({"Customer Address": address})
          })
          .catch(err => console.log(err));
       })
  } 
  
  getFirebaseData = () => {
    let ref = db.ref();
    let query = ref.orderByChild('InternalId').equalTo("none");
    query.once('child_added', snap => {
      this.setState({data: snap.val()});
    })
  }

  callBase = async (id) => {
    const response = await fetch(`/api/contact/${id}`, {mode: 'no-cors'})
    const body = await response.json();
    return body;
  }

  updateId = () => {
    console.log("update ID");
  }

  notSure = () => {
    //set notSure field to true in firebase
    console.log("Not Sure");
  };

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
