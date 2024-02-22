const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const org = require('./Router/Organisation/Organisation');
const customerDetails = require('./Router/CustomerDetails/CustomerDetails');

const port = 8282;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use('/noCache', org, customerDetails);
app.use('/', (request, response) => {
  response.json({
    info: 'Welcome to noCache',
  });
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
