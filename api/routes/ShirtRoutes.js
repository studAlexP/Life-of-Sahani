const {
    Router
} = require("express");
const shirtRoutes = Router();

const ShirtsController = require("../controllers/ShirtController");

shirtRoutes.get('/', ShirtsController.shirtsGetAll);
shirtRoutes.get('/:id', ShirtsController.shirtGetById);
shirtRoutes.delete('/delete/:id', ShirtsController.shirtDeleteById);
shirtRoutes.put('/:id', ShirtsController.shirtUpdateShirtById);
shirtRoutes.post('/create', ShirtsController.shirtCreateShirt);

module.exports = shirtRoutes;