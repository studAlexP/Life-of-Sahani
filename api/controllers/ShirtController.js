const ShirtsModel = require("../models/ShirtModel");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"))

class ShirtsController {
    static shirtsGetAll(req, res) {
        const shirtsArray = ShirtsModel.getShirts();
        res.status(200).send(shirtsArray);
    }
    /**
     * Grabs a shirt based on its id
     * @param {Object} req - contains info about the HTTP request 
     * @param {Object} res - sends back the desired HTTP response
     */
    static shirtGetById(req, res) {
        const {
            id
        } = req.params;
        const getShirt = ShirtsModel.findShirtById(id);
        if (getShirt) {
            res.status(200).send(getShirt)
        } else {
            res.status(404).send('Shirt not found!');
        }
    }

    /**
     * Creates a shirt based on the req
     * @param {Object} req - contains info about the HTTP request 
     * @param {Object} res - sends back the desired HTTP response
     */
    static shirtCreateShirt(req, res) {
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

    /**
     * Updates a shirt based on the req
     * @param {Object} req - contains info about the HTTP request 
     * @param {Object} res - sends back the desired HTTP response
     */
    static shirtUpdateShirtById(req, res) {
        const {
            id
        } = req.params;
        const shirt = {
            shirtGender: req.body.shirtGender,
            shirtName: req.body.shirtName,
            shirtPrice: req.body.shirtPrice,
            shirtImage: req.body.shirtImage,
            shirtQuantity: req.body.shirtQuantity
        };
        ShirtsModel.updateShirtById(id, shirt);
        res.status(200).send(shirt);
    }

    /**
     * Deletes a shirt bases on the req
     * @param {Object} req - contains info about the HTTP request 
     * @param {Object} res - sends back the desired HTTP response
     */
    static shirtDeleteById(req, res) {
        const {
            id
        } = req.params;
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