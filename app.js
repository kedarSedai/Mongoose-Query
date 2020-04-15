const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const routes = require('./Routes/BookRoutes');

const db = require('./setup/keys').db_url;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('Connect'))
        .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hi from Server');
});

app.use('/books', routes);

app.listen(port, () => console.log(`Server is running at ${port}`));
