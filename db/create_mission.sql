INSERT INTO traitor_missions
(mission_name, mission_secret_code_hash, traitor_users_id)
VALUES
($1,$2,$3)
RETURNING traitor_mission_id, mission_name, mission_status, traitor_users_id;