require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const session = require('express-session')

app.use(cors());
app.options('*', cors())
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT ||3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*')
    next();
});
app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});

app.use(session({
    secret: '0800fc577294c34e0b28ad2839435945',
    saveUninitialized: true,
    resave: true,
    cookie: { sameSite: 'none' },
}))

const shirtRoutes = require('./api/routes/ShirtRoutes');

app.use('/api/shirts', shirtRoutes);

app.post('/auth', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        if (username == 'Test' && password == 'Test') {
            req.session.loggedin = true;
            req.session.username = username;
            res.redirect('http://localhost:5500/html/feedback.html');
        } else {
            res.send("Username or Password incorrect");
        }
        res.end();
    }
    res.end();
})

app.get('/logout', (req, res) => {
    if (req.session.loggedin) {
        req.session.destroy();
        res.redirect('http://localhost:5500/html/login.html');

    }
    res.end();
})

app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Server listening at http://localhost:${PORT}`);
    }
});