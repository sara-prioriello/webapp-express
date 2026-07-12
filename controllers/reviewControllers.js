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
    const query = 'SELECT * FROM reviews WHERE movie_id = ?';
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
        res.json(results);
    });
};

//funzione per aggiungere una nuova recensione
function storeReview(req, res) {

    const movieId = parseInt(req.params.id);


    // prepare the SQL query to insert a new review into the reviews table
    const sql = "INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)";

    // extract the review data from the request body
    const { name, vote, text } = req.body;

    // perform the query to insert the new review
    db.query(sql, [movieId, name, vote, text], (err, result) => {
        if (err) {
            console.error("Error inserting review:", err);
            return res.status(500).json({ error: true, message: "Internal Server Error" });
        }

        res.status(201).json({ message: "Review added successfully", reviewId: result.insertId });
    });
}


module.exports = {
    index,
    show,
    storeReview
};  
