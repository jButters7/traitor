require('dotenv').config()
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();
const authCtrl = require('./authController');
const missionCtrl = require('./missionController');
const taskCtrl = require('./taskController');
const playerCtrl = require('./playerController');

//Socket Code Below
const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3000);
//Socket Code Above

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

app.use(express.json());

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 } //One year long cookie
}));

//TODO ENDPOINT GO HERE
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/me', authCtrl.getUser);
app.delete('/auth/logout', authCtrl.logout);

app.post('/api/mission/create', missionCtrl.createMission);
app.post('/api/mission/join/:userId', missionCtrl.joinMission);

app.get('/api/mission/tasks/:missionId', taskCtrl.getMissionTasks);
app.post('/api/mission/tasks/:missionId', taskCtrl.createMissionTask);
app.put('/api/mission/tasks/:taskId', taskCtrl.editMissionTask);

app.get('/api/players/:missionId', playerCtrl.getJoinedPlayers);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then(dbInstance => {
  app.set('db', dbInstance)
  console.log('DB is ready!')
  app.listen(SERVER_PORT, () => console.log(`Sever is ready on port ${SERVER_PORT}`)
  )
})