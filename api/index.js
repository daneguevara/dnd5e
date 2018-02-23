if (!process.env.BUILD) require('babel-register');

const winston = require('winston');

const colorConsole = new winston.transports.Console({ colorize: true });

global.cs = new winston.Logger({ transports: [colorConsole] });

const app = require('./app').default;

app.start();
