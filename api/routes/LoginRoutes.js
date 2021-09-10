const {
    Router
} = require("express");
const loginRoutes = Router();
const path = require('path');

loginRoutes.post('/', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        if (username == 'test' && password == 'test') {
            req.session.loggedin = true;
            req.session.username = username;
            let feedback = path.join(__dirname , '..', '..', 'html', 'feedback.html');
            console.log(feedback)
            res.redirect(feedback);
        } else {
            res.send("Username or Password incorrect");
        }
    }
    res.end();
})

module.exports = loginRoutes;