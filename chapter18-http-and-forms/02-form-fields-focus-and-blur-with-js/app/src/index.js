'use strict';

/*
  General requires
*/
const logger = require('./lib/logger')('index');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const compression = require('compression');
const requestLogger = require('morgan');


const app = express();


/* 3rd party middleware */
app.use(requestLogger(process.env['LOGGER_REQUEST_FORMAT_IN'] || 'tiny', { immediate: true }));
app.use(requestLogger(process.env['LOGGER_REQUEST_FORMAT_OUT'] || 'tiny'));
app.use(favicon(path.join(__dirname, process.env['PUBLIC_STATIC_RESOURCES_PATH'] || 'public', 'favicon.ico')));
app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, process.env['PUBLIC_STATIC_RESOURCES_PATH'] || 'public')));


logger.info(`Express application started with env=${ app.get('env')}; NODE_ENV=${ process.env['NODE_ENV'] }`);

module.exports = app;