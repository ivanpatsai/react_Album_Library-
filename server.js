const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./server/router');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

app.use(routes);
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}!`);
});