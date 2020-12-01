CREATE TABLE player_roles (
player_role_id SERIAL PRIMARY KEY,
role VARCHAR(100));

INSERT INTO player_roles
(role)
VALUES
('INITIAL'), ('COMRADE'), ('TRAITOR');

CREATE TABLE traitor_users (
traitor_users_id SERIAL PRIMARY KEY,
traitor_username VARCHAR(20) UNIQUE NOT NULL, 
player_role INT REFERENCES player_roles(player_role_id) NOT NULL DEFAULT 1,
password_hash VARCHAR(300) NOT NULL);

CREATE TABLE nick_name (
nick_name_id SERIAL PRIMARY KEY,
nick_name VARCHAR(100),
traitor_users_id  INT REFERENCES traitor_users(traitor_users_id) NOT NULL );

CREATE TABLE status (
status_id SERIAL PRIMARY KEY,
status VARCHAR(100));

INSERT INTO status
(status)
VALUES
('INITIAL'), ('INCOMPLETE'), ('COMPLETE');

CREATE TABLE game_group (
game_group_id SERIAL PRIMARY KEY,
group_name VARCHAR(100) NOT NULL UNIQUE,
game_status INT REFERENCES status(status_id) NOT NULL DEFAULT 1,
group_password_hash  VARCHAR(300) NOT NULL,

traitor_users_id INT REFERENCES traitor_users(traitor_users_id) NOT NULL );

CREATE TABLE task (
task_id SERIAL PRIMARY KEY,
game_group_id INT REFERENCES game_group(game_group_id) NOT NULL,
task_title VARCHAR(20) NOT NULL,
task_description VARCHAR(300),
assigned_to INT REFERENCES traitor_users(traitor_users_id) DEFAULT NULL,
status INT REFERENCES status(status_id) NOT NULL DEFAULT 1,
comrades_needed INT );

