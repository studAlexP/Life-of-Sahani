require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path')
const session = require('express-session')


app.use(cors());
app.options('*', cors())
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Content-Type", "application/json");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Content-Type", "text/html");
    next();
});




app.use(session({
    secret: '0800fc577294c34e0b28ad2839435945',
    saveUninitialized: true,
    resave: true,
}))


const loginRoutes = require('./api/routes/LoginRoutes');
const logoutRoutes = require('./api/routes/LogoutRoutes');

app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);

const shirtRoutes = require('./api/routes/ShirtRoutes');

app.use('/api/shirts', shirtRoutes);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Server listening at http://localhost:${PORT}`);
    }
});