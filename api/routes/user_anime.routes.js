module.exports = app => {
    const user_animes = require('../controllers/user_anime.controllers');

    // GET
    // Obtenir tous les animés de l'utilisateur
    app.get("/api/:userId", user_animes.getAll);

    // Obtenir tous les favoris de l'utilisateur
    app.get("/api/:userId/favorites", user_animes.getFavorites);

    // Obtenir tous les animés vus de l'utilisateur
    app.get("/api/:userId/viewed", user_animes.getViewed);

    // Obtenir tous les animés à voir de l'utilisateur
    app.get("/api/:userId/plantowatch", user_animes.getPlanToWatch);

    // Obtenir l'animé de l'user
    app.get("/api/:userId/:animeId", user_animes.getOne);

    // POST
    // Créer un favori pour un utilisateur
    app.post("/api/:userId/:animeId/favorites", user_animes.createFavorite);

    // Créer un animé vu pour un utilisateur
    app.post("/api/:userId/:animeId/viewed", user_animes.createViewed);

    // Créer un animé à voir pour un utilisateur
    app.post("/api/:userId/:animeId/planToWatch", user_animes.createPlantoWatch);

    // PUT
    // Passer un animé en favoris pour un utilisateur
    app.put("/api/:userId/:animeId/favorites", user_animes.updateToFavorites);

    // Passer un animé en vu pour un utilisateur
    app.put("/api/:userId/:animeId/viewed", user_animes.updateToViewed);

    // Passer un animé en animé à regarder pour un utilisateur
    app.put("/api/:userId/:animeId/planToWatch", user_animes.updateToPlanToWatch);

    // Enlever un favoris pour un utilisateur
    app.put("/api/remove/:userId/:animeId/favorites", user_animes.removeFromFavorites);

    // Enlever un animé vu pour un utilisateur
    app.put("/api/remove/:userId/:animeId/viewed", user_animes.removeFromViewed);

    // Enlever un animé de la liste des animés à voir pour un utilisateur
    app.put("/api/remove/:userId/:animeId/planToWatch", user_animes.removeFromPlanToWatch);

    // DELETE
    // Supprimer un animé d'un utilisateur
    app.delete("/api/:userId/:animeId", user_animes.removeAnime);
}