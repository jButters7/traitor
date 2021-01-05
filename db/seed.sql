DROP TABLE nick_name;
DROP TABLE tasks CASCADE;
DROP TABLE traitor_missions CASCADE;
DROP TABLE status CASCADE; 
DROP TABLE traitor_users CASCADE;
DROP TABLE player_roles CASCADE;
DROP TABLE traitor_users_tasks CASCADE;

-- ABOVE IS THE ORDER TO DROP THE TABLES


CREATE TABLE player_roles (
player_role_id SERIAL PRIMARY KEY,
role VARCHAR(100));

INSERT INTO player_roles
(role)
VALUES
('INITIAL'), ('COMRADE'), ('TRAITOR');


CREATE TABLE status (
status_id SERIAL PRIMARY KEY,
status VARCHAR(100));

INSERT INTO status
(status)
VALUES
('INITIAL'), ('INCOMPLETE'), ('COMPLETE');

CREATE TABLE traitor_users (
traitor_users_id SERIAL PRIMARY KEY,
traitor_username VARCHAR(20) UNIQUE NOT NULL, 
player_role INT REFERENCES player_roles(player_role_id) NOT NULL DEFAULT 1,
password_hash VARCHAR(300) NOT NULL);

CREATE TABLE traitor_missions (
traitor_mission_id SERIAL PRIMARY KEY,
mission_name VARCHAR(100) NOT NULL UNIQUE,
mission_status INT REFERENCES status(status_id) NOT NULL DEFAULT 1,
mission_secret_code_hash  VARCHAR(300) NOT NULL,
traitor_users_id INT REFERENCES traitor_users(traitor_users_id) NOT NULL );

ALTER TABLE traitor_users 
ADD COLUMN joined_mission INT REFERENCES traitor_missions(traitor_mission_id) DEFAULT NULL;

CREATE TABLE nick_name (
nick_name_id SERIAL PRIMARY KEY,
nick_name VARCHAR(100),
traitor_users_id  INT REFERENCES traitor_users(traitor_users_id) NOT NULL );

CREATE TABLE tasks (
task_id SERIAL PRIMARY KEY,
traitor_mission_id INT REFERENCES traitor_missions(traitor_mission_id) NOT NULL,
task_title VARCHAR(20) NOT NULL,
task_description VARCHAR(300),
comrades_needed INT NOT NULL );

CREATE TABLE traitor_users_tasks (
traitor_users_tasks SERIAL PRIMARY KEY,
task_id INT REFERENCES tasks(task_id) NOT NULL,
status INT REFERENCES status(status_id) NOT NULL DEFAULT 1, 
assigned_to INT REFERENCES traitor_users(traitor_users_id) DEFAULT NULL);
