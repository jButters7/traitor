module.exports = {
  getMissionTasks: async (req, res) => {
    const db = req.app.get('db');

    const { missionId } = req.params;

    const [allMissionTasks] = await db.get_mission_tasks(missionId)

    res.status(200).send(allMissionTasks);
  },

  createMissionTask: async (req, res) => {
    const db = req.app.get('db');

    const { missionId } = req.params;
    const { taskTitle, taskDescription, comradesNeeded } = req.body;


    for (let i = 0; i < comradesNeeded; i++) {
      await db.create_mission_task(missionId, taskTitle, taskDescription, comradesNeeded);
    }

    res.status(201).send('Task Created')
  },

  editMissionTask: async (req, res) => {
    const db = req.app.get('db');

    const { missionId } = req.params;
    const { taskTitle, taskDescription, comradesNeeded } = req.body;


  },

  deleteMissionTask: async (req, res) => { },
}