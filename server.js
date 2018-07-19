const express = require('express');
const app = express();
const rp = require('request-promise');

const port = process.env.PORT || 5000;

const BaseHeaders = {
    'Accept': 'application/json',
    'User-Agent': 'BaseCRM/v2 Python/1.0',
    'Authorization': 'Bearer 514456d0c04ae36df1aa9705126437eefe987e6780dec3f8f1c471991328b827'
  }

async function getContact(id) {
    const response = await rp({
        method: "GET",
        headers: BaseHeaders,
        uri: `https://api.getbase.com/v2/contacts/${id}`
        })
    const contact = JSON.parse(response);
    const address = contact.data.address;
    return address;
  }

const bodyParser = require('body-parser');
app.get('/api/contact/:id', async (req, res) => {
  let id = req.params.id
  await getContact(id)
    .then(address => {
       res.send(address)
    })
    .catch(err => console.log(err))
});

app.listen(port, () => console.log(`Listening on port ${port}`));
