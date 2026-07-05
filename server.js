const express = require('express');
const app = express();
const PORT = 3000;
//importiamo il router dei film
const moviesRouter = require('./routers/movies');
const reviewsRouter = require('./routers/reviews');

//inserire le immagini statiche nella cartella public
app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.use('/movies', moviesRouter);
app.use('/reviews', reviewsRouter);
//creo la rotta index



/*app.get('/', (req, res) => {
    res.send('Benvenuto nella mia applicazione Express!');
});
//creo la rotta show per avere il dettaglio di un film
app.get('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    res.send(`Dettaglio del film con id: ${movieId}`);
});*/