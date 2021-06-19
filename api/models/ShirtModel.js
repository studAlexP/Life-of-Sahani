const StormDB = require('stormdb');

const engine = new StormDB.localFileEngine('./db.stormdb', {async: true});
const db = new StormDB(engine);

/**
 * Initialize a databse if there is none or its empty
 */
async function initDatabase() {
    // Set default data for the database

    db.default({ 'shirts': [
        {
            shirtGender: "female",
            shirtName: "Red Lips",
            shirtPrice: 25.00,
            shirtImage: "../img/shop/white-women_tshirt_1.png",
            shirtQuantity: 5
        },
        {
            shirtGender: "female",
            shirtName: "Grey Eyes",
            shirtPrice: 20.00,
            shirtImage: "../img/shop/white-women_tshirt_2.png",
            shirtQuantity: 5
            
        },
        {
            shirtGender: "unisex",
            shirtName: "Sahani Logo",
            shirtPrice: 30.00,
            shirtImage: "../img/shop/black_pullover_1.png",
            shirtQuantity: 5    
        },
        {
            shirtGender: "unisex",
            shirtName: "Marksman &  Support",
            shirtPrice: 28.00,
            shirtImage: "../img/shop/black_pullover_2.png",
            shirtQuantity: 5    
        },
        {
            shirtGender: "male",
            shirtName: "Red Lips",
            shirtPrice: 25.00,
            shirtImage: "../img/shop/white-men_tshirt_1.png",
            shirtQuantity: 5
        },
        {
            shirtGender: "male",
            shirtName: "Grey Eyes",
            shirtPrice: 20.00,
            shirtImage: "../img/shop/white-men_tshirt_2.png",
            shirtQuantity: 5
        }
    ]}).save();
}

if (db.get('shirts').value() == undefined) {
    initDatabase();
}

class ShirtsModel {
    static getShirts() {
        let shirtsArray = [];
        for (let i = 0; i < db.get('shirts').length().value(); i++) {
            shirtsArray[i] = db.get('shirts').get(i).value();
        }        
        return shirtsArray;
    }

    static findShirtById(id) {
        return db.get('shirts').get(id).value();
    }

    static createShirt(shirt) {
        db.get('shirts').push(shirt).save();
    }

    static updateShirtById(id, shirt) {
        db.get('shirts').get(id).set(shirt).save();
    }

    static deleteShirtById(id) {
        db.get('shirts').get(id).delete();
    }
}

module.exports = ShirtsModel;