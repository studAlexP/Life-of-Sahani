document.addEventListener("DOMContentLoaded", function (event) {
    const shop = new Shop;
    
    let showMen = document.getElementById("men_btn");
    let showWomen = document.getElementById("women_btn");

    showMen.addEventListener("click", () => {shop.showMenSection()});
    showWomen.addEventListener("click", () => {shop.showWomenSection()});
});

/**
 * creates a new t shirt
 */
class Shirt {
    constructor(name, price, image, quantity) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
    }
}

class Shop {
    constructor() {
        this.main = document.getElementById("mainShopScreen");
    }

    createShop(shirts, gender) {

        let table = document.createElement("table");
        let tableR = document.createElement("tr");
        let tableD = document.createElement("td");
        let selectButton = document.createElement("select");

        // Creates for every T-Shirt an image and displays it
        for(let i = 0; i < shirts.length; i++) {
            let img = document.createElement("img");
            let tmp = tableD.appendChild(img);
            tmp.src = shirts[i].image;
            tmp.className = gender;
        }

        // Needed to create a second tr
        let tableR2 = document.createElement("tr");

        // Creates one button for each T-Shirt
        for (let i = 0; i < shirts.length; i++) {
            let button = document.createElement("input");
            button.type = "button";
            button.value = "Add to shopping cart";
            button.className = "addTo_btn";
            tableR2.appendChild(button);
        }

        tableR.appendChild(tableD);
        table.appendChild(tableR);
        table.appendChild(tableR2);

        this.main.appendChild(table);

        let addToCart = document.getElementsByClassName("addTo_btn");

        for (let i = 0; i < addToCart.length; i++) {
            addToCart[i].addEventListener("click", () => {
                shoppingCart.addToShoppingCart(shirts[i]);
            });
        }  
    }    

    /**
     * Creates Shirt Object for every 
     */
    showWomenSection() {
        let shirts = [];

        document.getElementById("start").remove();
        document.getElementById("women_btn").remove();
        document.getElementById("men_btn").remove();

        shirts[0] = new Shirt("Red Lips", 25, "../img/shop/white-women_tshirt_1.png", 5);
        shirts[1] = new Shirt("Grey Eyes", 20, "../img/shop/white-women_tshirt_2.png", 5);
        shirts[2] = new Shirt("Sahani Logo", 30, "../img/shop/black_pullover_1.png", 5);
        shirts[3] = new Shirt("Marksman & Support", 28, "../img/shop/black_pullover_2.png", 5);

        this.createShop(shirts, "women");
    }

    /**
     * Creates Shirt Object for every 
     */
    showMenSection() {
        let shirts = [];

        document.getElementById("start").remove();
        document.getElementById("women_btn").remove();
        document.getElementById("men_btn").remove();

        shirts[0] = new Shirt("Red Lips", 25, "../img/shop/white-men_tshirt_1.png", 5);
        shirts[1] = new Shirt("Grey Eyes", 20, "../img/shop/white-men_tshirt_2.png", 5);
        shirts[2] = new Shirt("Sahani Logo", 30, "../img/shop/black_pullover_1.png", 5);
        shirts[3] = new Shirt("Marksman & Support", 28, "../img/shop/black_pullover_2.png", 5);

        this.createShop(shirts, "men");
    }
}