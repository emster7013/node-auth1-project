Added express, still need to add knex, migrations, and seeds. Add Helmet(security layer) will def want this because we're talking about users/password

will need to make sure that password doesn't come back as plain text

resave: false,
saveUnitialized: false

would put in a sessionConfig object in server.js

session middleware
const sessions = require('express-session);
server.use(session(sessionConfig));

4/22/20 
Need to add in more stuff with sever.js and model[X]/routers[]