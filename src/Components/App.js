import './App.css';
import { config } from '../firebase';
import * as firebase from 'firebase';
import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import NoteData from './Main/Note-Data';
import Results from './Main/Results';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import { NetSuiteIdMap } from '../User_Id_to_NetSuite_ID_Map.js';

firebase.initializeApp(config);
const db = firebase.database();

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      results: []
    }
  }

  componentWillMount = async () => {
    await this.getAddress();
    await this.updatePartnerId();
    const firebaseData = await this.getFirebaseData();
    await this.getNetsuiteData(firebaseData);
  }

  
  //get address from base and update parter with id
  getAddress = async () => {
    const ref = db.ref();
    const query = ref.orderByChild('InternalId').equalTo("none");//change to "None" for production
    const snap = await query.once('child_added')
    const id = snap.val()['Contact ID'];
    const address = await this.callBase(id);
    return snap.ref.update({"Customer Address": address});
  } 

  updatePartnerId = async () => {
    const ref = db.ref();
    const query = ref.orderByChild('InternalId').equalTo("none");//change to "None" for production
    const snap = await query.once('child_added');
    const partnerBaseId = snap.val()['User ID'];
    const partnerId = NetSuiteIdMap[partnerBaseId];
      if (partnerId !== undefined){
        return snap.ref.update({"partnerId": partnerId});
      } else {
        return
      }
  }
  
  getFirebaseData = async () => {
    const ref = db.ref();
    const query = ref.orderByChild('InternalId').equalTo("none").limitToFirst(1);//change to 'None' for production
    const snap = await query.once('child_added');
    console.log('name', snap.val()['Contact Name']);
    await this.setState({data: snap.val()});
    console.log('state', this.state.data)
    return snap.val();
  }

  getNetsuiteData = async (data) => {
    const searchResults = await this.callNetsuite(data);
    this.setState({results: searchResults});
    return searchResults
  }

  callBase = async (id) => {
    const response = await fetch(`/api/contact/${id}`, {mode: 'no-cors'});
    const body = await response.json();
    return body;
  }  

  callNetsuite = async (state) => { 
    console.log('this.state.data', state);
    const response = await fetch(`/api/ns`,{
      method: 'POST',
      body: JSON.stringify(state),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const body = await response.json();
    return body;
  }

  updateId = async (memberId) => {
    console.log('update member id', memberId);
    const ref = db.ref();
    const query = ref.orderByChild('InternalId').equalTo("none");//change to "None" for production
    const snap = await query.once('child_added');
    await snap.ref.update({"InternalId": memberId});
    window.location.reload();
  }

  notSure = async () => {
    //set notSure field to true in firebase
    const contact = this.state.data['Contact ID'];
    const ref = db.ref();
    const query = ref.orderByChild('Contact ID').equalTo(contact)
    const snap = await query.once('child_added');
    await snap.ref.update({"notSure": true, "InternalId": "0"});
    window.location.reload();
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
            results={this.state.results}
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
