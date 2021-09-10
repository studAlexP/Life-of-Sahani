const {
    Router
} = require("express");
const logoutRoutes = Router();

logoutRoutes.get('/', (req, res) => {
    if (req.session.loggedin) {
        req.session.destroy();
        res.redirect('http://localhost:5500/html/login.html');

    }
    res.end();
})

module.exports = logoutRoutes;