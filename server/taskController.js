module.exports = {
  getMissionTasks: async (req, res) => {
    const db = req.app.get('db');

    const { missionId } = req.params;

    const allMissionTasks = await db.get_mission_tasks(missionId)

    res.status(200).send(allMissionTasks);
  },

  createMissionTask: async (req, res) => {
    const db = req.app.get('db');

    const { missionId } = req.params;
    const { taskTitle, taskDescription, comradesNeeded } = req.body;


    const [newTask] = await db.create_mission_task(missionId, taskTitle, taskDescription, comradesNeeded);

    const allMissionTasks = await db.get_mission_tasks(missionId)

    res.status(201).send(allMissionTasks)
  },

  editMissionTask: async (req, res) => {
    const db = req.app.get('db');

    const { taskId } = req.params;
    const { taskTitle, taskDescription, comradesNeeded } = req.body;

    await db.edit_mission_task(taskId, taskTitle, taskDescription, comradesNeeded);

    const allMissionTasks = await db.get_mission_tasks(missionId)

  },

  deleteMissionTask: async (req, res) => { },
}