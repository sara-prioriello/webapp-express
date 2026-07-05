//collegamento al database dei film
const db = require('../database/db_movies');

//funzione index per ottenere la lista dei film
function index(req, res) {
    const query = 'SELECT * FROM movies';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).send('Errore interno del server');
            return;
        }
        res.json(results);
    });
};

//funzione show per ottenere il dettaglio di un film
function show(req, res) {
    const movieId = req.params.id;
    const query = 'SELECT * FROM movies WHERE id = ?';
    db.query(query, [movieId], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).send('Errore interno del server');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Film non trovato');
            return;
        }
        res.json(results[0]);
    });
};
module.exports = {
    index,
    show
};