INSERT INTO traitor_users
(traitor_username, password_hash)
VALUES
($1, $2)
RETURNING traitor_username, traitor_users_id;
