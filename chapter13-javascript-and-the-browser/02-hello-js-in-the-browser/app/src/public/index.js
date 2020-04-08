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
const config = require('./lib/config');


const app = express();


/* 3rd party middleware */
app.use(requestLogger(config('logger:request_format_in') || 'tiny', { immediate: true }));
app.use(requestLogger(config('logger:request_format_out') || 'tiny'));
app.use(favicon(path.join(__dirname, config('server:public') || 'public', 'favicon.ico')));
app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, config('server:public') || 'public')));


logger.info(`Express application started with env=${ app.get('env')}; NODE_ENV=${ config('NODE_ENV') }`);

module.exports = app;