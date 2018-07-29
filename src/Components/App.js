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
    await this.getFirebaseData();
    await this.getNetsuiteData();
    console.log('this.state.results', this.state.results)
  }
  
  //get address from base and update parter with id
  getAddress = async () => {
    const ref = db.ref();
    const query = ref.orderByChild('InternalId').equalTo("none");//change to "None" for production
    await query.once('child_added', async snap => {
        const id = await snap.val()['Contact ID'];
        this.callBase(id)
          .then(address => {
            snap.ref.update({"Customer Address": address})
          })
          .catch(err => console.log(err));
       })
  } 

  updatePartnerId = async () => {
    const ref = db.ref();
    const query = ref.orderByChild('InternalId').equalTo("none");//change to "None" for production
    query.once('child_added', async snap => {
      const partnerBaseId = await snap.val()['User ID'];
      console.log('partnerBaseId', partnerBaseId);
      const partnerId = NetSuiteIdMap[partnerBaseId];
      if (partnerId !== undefined){
        snap.ref.update({"partnerId": partnerId});
      } else {
        return
      }
    });
  }
  
  getFirebaseData = async () => {
    const ref = db.ref();
    const query = ref.orderByChild('InternalId').equalTo("none");//change to 'None' for production
    await query.once('child_added', snap => {
       this.setState({data: snap.val()});
    })
  }

  getNetsuiteData = async () => {
    const searchResults = await this.callNetsuite(this.state.data);
    await this.setState({results: searchResults});
    console.log('search results: ', searchResults)
  }

  callBase = async (id) => {
    const response = await fetch(`/api/contact/${id}`, {mode: 'no-cors'});
    const body = await response.json();
    return body;
  }  

  callNetsuite = async (state) => { 
    console.log('state', state);
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

  updateId = () => {
    console.log("update ID");
  }

  notSure = () => {
    //set notSure field to true in firebase
    //console.log("Not Sure");
    const contact = this.state.data['Contact ID'];
    const ref = db.ref();
    const query = ref.orderByChild('Contact ID').equalTo(contact)
      query.once('child_added', snap => {
        //console.log('contact', snap.val())
      snap.ref.update({"notSure": true, "InternalId": false})
     })
    
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
