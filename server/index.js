require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
require('./database');
const port = process.env.PORT || 8080;
const main_routes = require('./routes');
const cors = require('cors');
const handleError = require('./middlewares/error.middleware');


app.use(bodyParser.json());

app.use(cors())

app.use('/api',main_routes);

app.use(handleError)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})