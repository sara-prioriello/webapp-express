const express = require('express');
const router = express.Router();

//collegamento al controller delle recensioni
const reviewController = require('../controllers/reviewControllers');

//creiamo una route per la lista delle recensioni
router.get('/', reviewController.index);

//la rotta show per avere il dettaglio di una recensione 
router.get('/:id', reviewController.show);
/*
router.get('/', (req, res) => {
    res.send('Lista delle recensioni');
});

router.get('/:id', (req, res) => {
    const reviewId = req.params.id;
    res.send(`Dettaglio della recensione con id: ${reviewId}`);
});
*/
module.exports = router;