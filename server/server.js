const express = require('express');
const db = require('./db');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname,'../client/build')))
















app.listen(PORT,()=>console.log(`listening on port: ${PORT}`))