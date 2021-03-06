const User = require('../models/users.model');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

exports.create = (req, res) => {
    const hash = bcrypt.hashSync(req.body.pwd, salt);

    const user = new User({
        username: req.body.username,
        pwd: hash
    });

    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                err.message || "Une erreur est survenue à la création de l'utilisateur."
            });
        } else res.send(data);
    });
};

exports.findOneByUsername = (req, res) => {
    User.findByUsername(req.params.username, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message || `Aucun Utilisateur trouvé avec ce nom : ${req.params.username}.`
                });
            } else {
                res.status(500).send({
                    message: err.message || `Erreur lors de la récupération du l'utilisateur : ${req.params.username}.`
                })
            }
        } else  {
            console.log("Données : ", data);
            res.send(data);
        }
    });
};

exports.findOneToLogin = (req, res) => {
    User.findByUsername(req.params.username, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message || `Aucun Utilisateur trouvé avec ce nom : ${req.params.username}.`
                });
            } else {
                res.status(500).send({
                    message: err.message || `Erreur lors de la récupération du l'utilisateur : ${req.params.username}.`
                })
            }
        } else  {
            bcrypt.compare(req.params.pwd, data.pwd, (err, result) => {
                if (err) throw err;
                if (result) {
                    res.send(data);
                }
            });
        }
    }); 

};