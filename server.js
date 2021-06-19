require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.options('*', cors())
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT ||3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
});

const shirtRoutes = require('./api/routes/ShirtRoutes');

app.use('/api/shirts', shirtRoutes);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Server listening at http://localhost:${PORT}`);
    }
});