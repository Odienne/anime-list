const sql = require('./db');

const UserAnime = function(userAnime) {
    this.animeId = userAnime.animeId,
    this.isFavoris = userAnime.isFavoris,
    this.isViewed = userAnime.isViewed,
    this.planToWatch = userAnime.planToWatch,
    this.userId = userAnime.userId
};

// Create
UserAnime.create = (newAnime, result) => {
    sql.query("INSERT INTO USER_ANIME SET ?", newAnime, (err) => {
        if (err) {
            console.log("erreur : ", err);
            result(null, err);
            return;
        }

        console.log("Animé créé");
    });
}

// Read
UserAnime.findAll = (userId, result) => {
    sql.query("SELECT * FROM USER_ANIME WHERE userId = ?", userId, (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(null, err);
            return;
        }

        console.log("Animés trouvés");
        result(null, res);
    });
}

UserAnime.findOne = (userId, animeId, result) => {
    sql.query("SELECT * FROM USER_ANIME WHERE userId = ? AND animeId = ?", [userId, animeId], (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(null, err);
            return;
        }

        console.log("Animés trouvés");
        result(null, res);
    });
}

UserAnime.findViewed = (userId, result) => {
    sql.query("SELECT * FROM USER_ANIME WHERE userId = ? AND isViewed = true", [userId], (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(null, err);
            return;
        }

        console.log("Animés trouvés");
        result(null, res);
    });
}

UserAnime.findFavorites = (userId, result) => {
    sql.query("SELECT * FROM USER_ANIME WHERE userId = ? AND isFavoris = true", userId, (err, res) => {
        console.log(userId)
        if (err) {
            console.log("erreur : ", err);
            result(null, err);
            return;
        }

        console.log("Animés trouvés");
        result(null, res);
    });
}

UserAnime.findPlanToWatch = (userId, result) => {
    sql.query("SELECT * FROM USER_ANIME WHERE userId = ? AND planToWatch = true", [userId], (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(null, err);
            return;
        }

        console.log("Animés trouvés");
        result(null, res);
    });
}

// Update
UserAnime.setFavorite = (userId, animeId, result) => {
    sql.query("UPDATE USER_ANIME SET isFavoris = true where userId = ? and animeId = ?", [userId, animeId], (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Anime N°", animeId, " mis en favoris");
        result(null, { userId: userId, animeId: animeId }, null);
    });
};

UserAnime.setViewed = (userId, animeId, result) => {
    sql.query("UPDATE USER_ANIME SET isViewed = true where userId = ? and animeId = ?", [userId, animeId], (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Anime N°", animeId, " vu");
        result(null, { userId: userId, animeId: animeId }, null);
    });
}

UserAnime.setPlanToWatch = (userId, animeId, result) => {
    sql.query("UPDATE USER_ANIME SET planToWatch = true where userId = ? and animeId = ?", [userId, animeId], (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Anime N°", animeId, " vu");
        result(null, { userId: userId, animeId: animeId }, null);
    });
}

UserAnime.unsetFavorite = (userId, animeId, result) => {
    sql.query("UPDATE USER_ANIME SET isFavoris = false where userId = ? and animeId = ?", [userId, animeId], (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Anime N°", animeId, " enlevé des favoris");
        result(null, { userId: userId, animeId: animeId }, null);
    });
}

UserAnime.unsetViewed = (userId, animeId, result) => {
    sql.query("UPDATE USER_ANIME SET isViewed = false where userId = ? and animeId = ?", [userId, animeId], (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Anime N°", animeId, " enlevé des animés vus");
        result(null, { userId: userId, animeId: animeId }, null);
    });
}

UserAnime.unsetPlanToWatch = (userId, animeId, result) => {
    sql.query("UPDATE USER_ANIME SET planToWatch = false where userId = ? and animeId = ?", [userId, animeId], (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Anime N°", animeId, " enlevé des animés à regarder");
        result(null, { userId: userId, animeId: animeId }, null);
    });
}

// Delete
UserAnime.deleteOne = (userId, animeId, result) => {
    sql.query("DELETE FROM USER_ANIME WHERE userId = ? and animeId = ?", [userId, animeId], (err, res) => {
        if (err) {
            console.log("erreur : ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Animé supprimé", );
        result(null, res);
    });
}

module.exports = UserAnime;