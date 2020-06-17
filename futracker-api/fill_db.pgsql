-- USER CREATION

-- INSERT INTO "User" ("name", "email", "password", "language", "gender") VALUES ('David Laubenstein', 'david.laubenstein@gmail.com', 'password', 'DE', 'male');

-- SELECT * FROM "User";

-- PLAYER CREATION
--INSERT INTO "Player" ("user_id", "name", "version", "rating", "weak foot", "skills") VALUES ('1', 'Luca Modric', 'Moments Premium', '96', '4', '4');
-- INSERT INTO "Player" ("user_id", "name", "version", "rating", "weak foot", "skills") VALUES ('1', 'Sergio Ramos', 'Moments', '93', '3', '3');
-- INSERT INTO "Player" ("user_id", "name", "version", "rating", "weak foot", "skills") VALUES ('1', 'Virgil Van Dijk', 'FUT Birthday', '93', '5', '2');
-- INSERT INTO "Player" ("user_id", "name", "version", "rating", "weak foot", "skills") VALUES ('1', 'Trent Alexander-Arnold', 'TOTSSF', '95', '4', '3');
-- INSERT INTO "Player" ("user_id", "name", "version", "rating", "weak foot", "skills") VALUES ('1', 'Sergio Reguillon', 'TOTSSF', '92', '3', '2');
-- INSERT INTO "Player" ("user_id", "name", "version", "rating", "weak foot", "skills") VALUES ('1', 'Jordan Henderson', 'TOTSSF', '94', '3', '3');
-- INSERT INTO "Player" ("user_id", "name", "version", "rating", "weak foot", "skills") VALUES ('1', 'Heung Min Son', 'TOTSSF', '95', '5', '4');
-- INSERT INTO "Player" ("user_id", "name", "version", "rating", "weak foot", "skills") VALUES ('1', 'Rihad Mahrez', 'TOTSSF', '95', '4', '5');
-- INSERT INTO "Player" ("user_id", "name", "version", "rating", "weak foot", "skills") VALUES ('1', 'Eden Hazard', 'Moments', '95', '4', '4');
-- INSERT INTO "Player" ("user_id", "name", "version", "rating", "weak foot", "skills") VALUES ('1', 'Marcus Rashford', 'FUT Birthday', '90', '5', '5');
-- INSERT INTO "Player" ("user_id", "name", "version", "rating", "weak foot", "skills") VALUES ('1', 'Alisson Becker', 'TOTSSF', '97', '3', '1');

--SELECT * FROM "Player";


-- SELECT player.name FROM "Team" as team, "Player" as player WHERE CAST(team.user_id AS varchar(1000)) LIKE '1%' AND  player.id = ANY(team.player);
--INSERT INTO "Team" ("user_id", "name", "creation_date", "wl_used", "player") VALUES ('1', 'WL June 2', '06.16.2020-15:45:45', '{}', '{1,2,3,4,5,6,7,8,9,10,11}');

-- DELETE FROM "User" WHERE id > 1;
SELECT * FROM "WeekendLeague";