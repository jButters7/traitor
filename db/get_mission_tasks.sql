SELECT * 
FROM tasks
WHERE traitor_mission_id = $1
ORDER BY task_id ASC;