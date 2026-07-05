//collegamento al database 
const db = require('../database/db_movies');

//funzione per la lista delle recensioni
function index(req, res) {
    const query = 'SELECT * FROM reviews';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).send('Errore interno del server');
            return;
        }
        res.json(results);
    });
};

//funzione per il dettaglio di una recensione
function show(req, res) {
    const reviewId = req.params.id;
    const query = 'SELECT * FROM reviews WHERE id = ?';
    db.query(query, [reviewId], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).send('Errore interno del server');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Recensione non trovata');
            return;
        }
        res.json(results[0]);
    });
};

module.exports = {
    index,
    show
};  
