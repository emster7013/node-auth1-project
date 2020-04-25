const session = require('express-session'); 
const knexSessionStore = require('connect-session-knex')(session);
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require('./auth/auth-router.js');
const UserRouter = require('./users/user-router.js');
const server = express();

const sessionConfig = {
    name: "user-session",
    secret: "secretsdontmakefriends",
    cookie: {
        maxAge: 3600 * 1000,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,

    store: new knexSessionStore (
        {
            knex: require("./data/db-config"),
            tablename: "sessions",
            sidfilename: "sid",
            createtable: true,
            clearInterval: 3600 * 1000
        }
    )
}

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/auth', authRouter)
server.use('/user', UserRouter);

server.get("/", (req, res) => {
    res.json({ api: 'You smell' })
})
module.exports = server;