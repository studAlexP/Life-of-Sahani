require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT ||3000;

const shirtRoutes = require('./api/routes/ShirtRoutes');
app.use('/api/shirts', shirtRoutes);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Server listening at http://localhost:${PORT}`);
    }
});