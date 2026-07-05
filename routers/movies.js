//importiamo express e creiamo la variabile router
const express = require('express');
const router = express.Router();


//collegamento al controller dei film
const moviesController = require('../controllers/moviesController');

//creiamo una route per la lista dei film
router.get('/', moviesController.index);

//la rotta show per avere il dettaglio di un film 
router.get('/:id', moviesController.show);



/*
//creiamo una route per la lista dei film
router.get('/', (req, res) => {
    res.send('Lista dei film');
});

//la rotta show per avere il dettaglio di un film 
router.get('/:id', (req, res) => {
    const movieId = req.params.id;
    res.send(`Dettaglio del film con id: ${movieId}`);
});
*/

//esportiamo il router
module.exports = router;