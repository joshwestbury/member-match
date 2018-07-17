import './App.css';
import { config } from '../firebase';
import * as firebase from 'firebase';
import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import NoteData from './Main/Note-Data';
import Results from './Main/Results';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import * as rp from 'request-promise';



firebase.initializeApp(config);

const db = firebase.database();

const BaseHeaders = {
  'Accept': 'application/json',
  'User-Agent': 'BaseCRM/v2 Python/1.0',
  'Authorization': 'Bearer 514456d0c04ae36df1aa9705126437eefe987e6780dec3f8f1c471991328b827'
}

class App extends Component {
  
  constructor() {
    super();
    this.getFirebaseData();
    
    
    this.state = {
      data: {}
    }
    //this.updateId();
    
  }

  getContact = async (id) => {
    const response = await rp({
        method: "GET",
        headers: BaseHeaders,
        uri: `https://api.getbase.com/v2/contacts/${id}`
        })
    const contact = JSON.parse(response);
    const address = contact.data.address;
    return address;
  }

  getAddress = () => {
    const ref = db.ref();
    const query = ref.orderByChild('InternalId').equalTo("none");
    query.once('child_added', snap => {
        const id = snap.val()['Contact ID'];
        getContact(id, query)
            .then(data => {
                query.once('child_added', snap => {
                    snap.ref.update({"Customer Address": data})
                })
            })
        .catch(err => console.log(err));
      })
  } 
  
  getFirebaseData = () => {
    let ref = db.ref();
    //let query = ref.orderByChild('Contact Name');
    let query = ref.orderByChild('InternalId').equalTo("none");
    query.once('child_added', snap => {
      this.setState({data: snap.val()});
    })
    
  }

  getAddressData = () => {
    //query Base for addresses
    
  }

  updateId = () => {
    console.log("update ID");
    //set InternalId field in
    //let query = ref.orderByChild('InternalId')
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
