module.exports = {
  getJoinedPlayers: async (req, res) => {
    const db = req.app.get('db');

    const { missionId } = req.params;

    const [playersJoined] = await db.get_joined_players(missionId);
  }
}