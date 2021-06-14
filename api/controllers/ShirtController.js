const ShirtsModel = require("../models/ShirtModel");

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
        let newShirt = req.body;
        ShirtsModel.createShirt(newShirt);
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