CREATE DATABASE IF NOT EXISTS `animelist`;

USE `animelist`;

CREATE TABLE IF NOT EXISTS `USER` (
    userId INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    pwd VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS `USER_ANIMES` (
    animeId INTEGER,
    isFavoris BOOLEAN,
    isViewed BOOLEAN,
    planToWatch BOOLEAN,
    userId INTEGER,
    PRIMARY KEY (userId, animeId),
    FOREIGN KEY (userId) REFERENCES USER(userId)
);