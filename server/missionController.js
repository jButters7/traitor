const bcrypt = require('bcryptjs');

module.exports = {
  createMission: async (req, res) => {
    const db = req.app.get('db');

    const { missionName, secretCode, traitorUserId } = req.body;

    const [mission] = await db.check_mission_name([missionName]);

    if (mission) {
      return res.status(409).send('Mission name already taken');
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(secretCode, salt);

    const [createdMission] = await db.create_mission(missionName, hash, traitorUserId);

    res.status(201).send(createdMission)
  },

  joinMission: async (req, res) => {
    const db = req.app.get('db');
    const { missionName, secretCode } = req.body;

    const [mission] = await db.check_mission_name([missionName]);

    if (!mission) {
      return res.status(404).send('Mission not found');
    }

    const isAuthenticated = bcrypt.compareSync(secretCode, mission.mission_secret_code_hash);

    if (!isAuthenticated) {
      return res.status(403).send('Incorrect mission name or secret code');
    }

    delete mission.mission_secret_code_hash;

    res.status(200).send(mission);
  },

  //TODO
  deleteMission: async (req, res) => { },

  editMissionName: async (req, res) => { }
}