  
const knexSessionStore = require('connect-session-knex');//(session)
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const UserRouter = require('./users/user-router.js');
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/user', UserRouter);


module.exports = server;