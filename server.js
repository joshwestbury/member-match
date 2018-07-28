const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise');
const headers = require('./headers')

const port = process.env.PORT || 5000;
const app = express();
//app.use(bodyParser.json());

const jsonParser = bodyParser.json()

async function getContact(id) {
    const response = await rp({
        method: "GET",
        headers: headers.BaseHeaders,
        uri: `https://api.getbase.com/v2/contacts/${id}`
        })
    const contact = JSON.parse(response);
    const address = contact.data.address;
    return address;
  } 

async function searchNetsuite(state) {

    const options = {
        method: 'POST',
        body: state,
        uri: 'https://1115124.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=278&deploy=1',
        json: true,
        headers: headers.NetsuiteHeaders
    }

    const results = await rp(options);
    console.log(results);
    return results;
}

app.get('/api/contact/:id', async (req, res) => {
    let id = req.params.id
    await getContact(id)
        .then(address => {
            res.send(address)
        })
        .catch(err => console.log(err))
});

app.post('/api/ns', jsonParser, async (req, res) => {
    let state = req.body;
    console.log('state is: ', state);
    try {
        const results = await searchNetsuite(state);
        console.log('netsuite results', results);
        res.send(results); 
    } catch (e) {
        res.send(e);
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`));
