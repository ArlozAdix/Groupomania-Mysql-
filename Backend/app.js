const express = require('express');
const path = require('path');

const routes = require('./routes/post');
const db = require('./db/db')
const app = express();

app.use(express.json());
app.use(routes);

db.sync()
.then((console.log("Connexion database OK")))
.catch(error => console.log(error))

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(8080, () => console.log("port 8080"));