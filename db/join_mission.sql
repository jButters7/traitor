UPDATE traitor_users
SET joined_mission = $2
WHERE traitor_users_id = $1;