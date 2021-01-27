const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const connection = mysql.createConnection({
    host : dbConfig.HOST,
    user : dbConfig.USER,
    password : dbConfig.PASSWORD,
    port : dbConfig.PORT
});

// ouverture de la connexion mysql et création de la base et des tables
connection.connect(error => {
    if (error) throw error;
    connection.query('CREATE DATABASE IF NOT EXISTS `animelist`', function(err, result) {
        if (err) throw err;

        connection.query('USE `animelist`', function(err, result) {
            if (err) throw err;

            connection.query('CREATE TABLE IF NOT EXISTS `USER` ( userId INTEGER PRIMARY KEY AUTO_INCREMENT,   username VARCHAR(30) NOT NULL, pwd VARCHAR(100) NOT NULL);', function(err, result) {
                if (err) throw err;

                connection.query('CREATE TABLE IF NOT EXISTS `USER_ANIMES` ( animeId INTEGER, isFavoris BOOLEAN, isViewed BOOLEAN, planToWatch BOOLEAN, userId INTEGER, PRIMARY KEY (userId, animeId), FOREIGN KEY (userId) REFERENCES USER(userId));', function(err, result) {
                    if (err) throw err;
                });
            });
        });
    });
});

module.exports = connection;