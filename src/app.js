require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const port = process.env.PORT || 8080;
// const url =  process.env.APP_URL ||'http://localhost';
const router = require('./routers');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(port, () => console.log(`Server running on [${port}]`));

module.exports = app;
