const shirts = new Map();
let shirtID = 1;

shirts.set(shirtID.toString(), {
    shirtName: "Red Lips",
    shirtPrice: 25.00,
    shirtImage: "../img/shop/white-women_tshirt_1.png",
    shirtQuantity: 5
});

shirtID++;
shirts.set(shirtID.toString(), {
    shirtName: "Grey Eyes",
    shirtPrice: 20.00,
    shirtImage: "../img/shop/white-women_tshirt_2.png",
    shirtQuantity: 5
});

shirtID++;
shirts.set(shirtID.toString(), {
    shirtName: "Sahani Logo",
    shirtPrice: 30.00,
    shirtImage: "../img/shop/black_pullover_1.png",
    shirtQuantity: 5
});

shirtID++;
shirts.set(shirtID.toString(), {
    shirtName: "Marksman &  Support",
    shirtPrice: 28.00,
    shirtImage: "../img/shop/black_pullover_2.png",
    shirtQuantity: 5
});

class ShirtsModel {
    static getShirts() {
        let shirtsArray = [];
        for (let [id, shirt] of shirts) {
            shirtsArray.push({id, shirt});
        }
        return shirtsArray;
    }

    static findShirtById(id) {
        let shirt = shirts.get(id);
        return shirt;
    }

    static createShirt(shirt) {}

    static updateShirtById(id, shirt) {}

    static deleteShirtById(id) {
        shirts.delete(id);
    }
}

module.exports = ShirtsModel;