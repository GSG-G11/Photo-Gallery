require('env2')('.env');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const { join } = require('path');
const router = require('./routes');

const app = express();
app.use(compression());
app.use(helmet());
app.use(express.static(join(__dirname, '../public'), { maxAge: '30d' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.set('port', process.env.PROT || 3000);

module.exports = app;
