const ShirtsModel = require("../models/ShirtModel");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

class ShirtsController {
    static shirtsGetAll (req, res) {
        const shirtsArray = ShirtsModel.getShirts();
        res.status(200).send(shirtsArray);
    }

    static shirtGetById (req, res) {
        const {id} = req.params;
        const getShirt = ShirtsModel.findShirtById(id);
        if (getShirt) {
            res.status(200).send(getShirt)
        } else {
            res.status(404).send('Shirt not found!');
        }
    }

    static shirtCreateShirt (req, res) {
        const shirt = {
            shirtGender: req.body.shirtGender,
            shirtName: req.body.shirtName,
            shirtPrice: req.body.shirtPrice,
            shirtImage: req.body.shirtImage,
            shirtQuantity: req.body.shirtQuantity
        };
        //ShirtsModel.createShirt(shirt);
        ShirtsModel.createShirt(shirt);
        res.status(200).send(shirt);
    }

    static shirtUpdateShirtById (req, res) {}

    static shirtDeleteById (req, res) {
        const {id} = req.params;
        const getShirt = ShirtsModel.findShirtById(id);
        if (getShirt) {
            ShirtsModel.deleteShirtById(id);
            res.status(200).send('Shirt deleted');
        } else {
            res.status(404).send('Shirt not found');
        }
    }
}

module.exports = ShirtsController;