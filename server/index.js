const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

app.use(express.json());

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 } //One year long cookie
}))

//TODO ENDPOINT GO HERE



massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then(dbInstance => {
  app.set('db', dbInstance)
  console.log('DB is ready!')
  app.listen(SERVER_PORT, () => console.log(`Sever is ready on port ${SERVER_PORT}`)
  )
})