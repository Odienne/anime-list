const UserAnime = require('../models/user_anime.model');

exports.createFavorite = (req, res) => {
    const anime = new UserAnime({
        animeId: req.params.animeId,
        isFavoris: true,
        isViewed: false,
        planToWatch: false,
        userId: req.params.userId
    });

    UserAnime.create(anime, (err, data) => {
        if (err) {
            res.status(500).send({
                message : err.message || "Une erreur est survenue à la mise en favoris"
            });
        } else res.send(data);
    });
};

exports.createViewed = (req, res) => {
    const anime = new UserAnime({
        animeId: req.params.animeId,
        isFavoris: false,
        isViewed: true,
        planToWatch: false,
        userId: req.params.userId
    });

    UserAnime.create(anime, (err, data) => {
        if (err) {
            res.status(500).send({ 
                message : err.message || "Une erreur est survenue à la mise en favoris"
            });
        } else res.send(data);
    });
};

exports.createPlantoWatch = (req, res) => {
    const anime = new UserAnime({
        animeId: req.params.animeId,
        isFavoris: false,
        isViewed: false,
        planToWatch: true,
        userId: req.params.userId
    });

    UserAnime.create(anime, (err, data) => {
        if (err) {
            res.status(500).send({ 
                message : err.message || "Une erreur est survenue à la mise en favoris"
            });
        } else res.send(data);
    });
};

exports.getAll = (req, res) => {
    UserAnime.findAll(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message : err.message || "Aucun animé trouvé pour cet utilisateur"
                });
            } else {
                res.status(500).send({
                    message : err.message || "Erreur lors de la récupération des animés pour l'utilisateur"
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.getOne = (req, res) => {
    UserAnime.findOne(req.params.userId, req.params.animeId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message : err.message || "Aucun animé trouvé pour cet utilisateur"
                });
            } else {
                res.status(500).send({
                    message : err.message || "Erreur lors de la récupération de l'animé pour l'utilisateur"
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.getFavorites = (req, res) => {
    UserAnime.findFavorites(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message || "Aucun favoris pour cet utilisateur"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Erreur lors de la récupération "
                });
            }
        } else res.send(data);
    });
};

exports.getViewed = (req, res) => {
    UserAnime.findViewed(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message || "Aucun animés vus pour cet utilisateur"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Erreur lors de la récupération "
                });
            }
        } else res.send(data);
    });
};

exports.getPlanToWatch = (req, res) => {
    UserAnime.findPlanToWatch(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message || "Aucun animé à regarder pour cet utilisateur"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Erreur lors de la récupération "
                });
            }
        } else res.send(data);
    });
};

exports.updateToFavorites = (req, res) => {
    UserAnime.setFavorite(req.params.userId, req.params.animeId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message || "Animé non trouvé pour cet utilisateur"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Erreur d'ajout aux favoris"
                });
            } 
        } else res.send(data)
    });
};

exports.updateToViewed = (req, res) => {
    UserAnime.setViewed(req.params.userId, req.params.animeId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message || "Animé non trouvé pour cet utilisateur"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Erreur d'ajout aux vus"
                });
            } 
        } else res.send(data)
    });
};

exports.updateToPlanToWatch = (req, res) => {
    UserAnime.setPlanToWatch(req.params.userId, req.params.animeId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message || "Animé non trouvé pour cet utilisateur"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Erreur d'ajout aux animés à regarder"
                });
            } 
        } else res.send(data)
    });
};

exports.removeFromViewed = (req, res) => {
    UserAnime.unsetViewed(req.params.userId, req.params.animeId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message || "Animé non trouvé pour cet utilisateur"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Erreur de suppression des animés vus"
                });
            } 
        } else res.send(data)
    });
};

exports.removeFromFavorites = (req, res) => {
    UserAnime.unsetFavorite(req.params.userId, req.params.animeId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message || "Animé non trouvé pour cet utilisateur"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Erreur de suppression des favoris"
                });
            } 
        } else res.send(data)
    });
};

exports.removeFromPlanToWatch = (req, res) => {
    UserAnime.unsetPlanToWatch(req.params.userId, req.params.animeId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message || "Animé non trouvé pour cet utilisateur"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Erreur de suppression des animés à regarder"
                });
            } 
        } else res.send(data)
    });
};

exports.removeAnime = (req, res) => {
    UserAnime.deleteOne(req.params.userId, req.params.animeId, (err, data) =>{
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message || "Animé non trouvé pour cet utilisateur"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Erreur de supression d'animé"
                });
            }
        } else res.send(data)
    });
};