CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    passwd TEXT
);

CREATE TABLE IF NOT EXISTS animes(
    animeid INTEGER PRIMARY KEY,
    userid INTEGER,
    isFavorite BOOLEAN,
    isWatched BOOLEAN,
    FOREIGN KEY(userid) REFERENCES users(id)
);
