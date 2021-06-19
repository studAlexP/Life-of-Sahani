document.addEventListener("DOMContentLoaded", function (event) {
    const shop = new Shop;
    
    let showMen = document.getElementById("men_btn");
    let showWomen = document.getElementById("women_btn");

    showMen.addEventListener("click", () => {shop.showMenSection()});
    showWomen.addEventListener("click", () => {shop.showWomenSection()});

   /* const shirt = {
        shirtGender: "female",
        shirtName: "test",
        shirtPrice: 25.00,
        shirtImage: "../img/shop/white-women_tshirt_1.png",
        shirtQuantity: 5
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(shirt),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const url = "http://localhost:3000/api/shirts/create"
    fetch(url, options)
        .then(res=>res.json())
        .then(res=>console.log(res))*/

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

    /**
     * Creates the shop base on given params
     * @param {array with shirt objects} shirts 
     * @param {string containing "men" or "women"} gender 
     */
    createShop(shirts, gender) {
        this.shoppingCart = new ShoppingCart();
        console.log(shirts[0]);

        let table = document.createElement("table");
        let tableR = document.createElement("tr");
        let tableD = document.createElement("td");


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
                this.shoppingCart.addShirt(shirts[i]);
                this.shoppingCart.showSum();
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

        // Fetches the shirts from the api with the gender female or unisex
        fetch('http://localhost:3000/api/shirts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Server not reachable');
                } else {
                    return response.json();
                }
            })
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].shirtGender == "female" || data[i].shirtGender == "unisex") {
                       shirts.push(new Shirt(data[i].shirtName, data[i].shirtPrice, data[i].shirtImage, data[i].shirtQuantity)); 
                    }
                }
                this.createShop(shirts, "women");
            });
    }

    /**
     * Creates Shirt Object for every 
     */
    showMenSection() {
        let shirts = [];

        document.getElementById("start").remove();
        document.getElementById("women_btn").remove();
        document.getElementById("men_btn").remove();

        // Fetches the shirts from the api with the gender male or unisex
        fetch('http://localhost:3000/api/shirts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Server not reachable');
                } else {
                    return response.json();
                }
            })
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].shirtGender == "male" || data[i].shirtGender == "unisex") {
                        shirts.push(new Shirt(data[i].shirtName, data[i].shirtPrice, data[i].shirtImage, data[i].shirtQuantity));
                    }
                }
                this.createShop(shirts, "men");
            });
    }
}

class ShoppingCart {
    constructor() {
        this.shoppingCartSum = 0;
        this.shirts = [];

        this.aside = document.getElementById("shopOverview");
        this.h2 = document.createElement("h2");
        this.shoppingCartHeading = document.createTextNode("Shopping Cart");
        this.ul = document.createElement("ul");
        this.div = document.createElement("div");
        this.div.id = "shoppingCartSum";
        this.div.textContent = "Sum: " + this.shoppingCartSum + " €";

        this.h2.appendChild(this.shoppingCartHeading);
        this.aside.appendChild(this.h2);
        this.aside.appendChild(this.ul);
        this.aside.appendChild(this.div);
    }

    addShirt(shirt) {
        if (this.shirts.includes(shirt)) {
            console.log("tes");
        } else {
            console.log(shirt);
            let ul = document.getElementsByTagName("ul")[1];
            let li = document.createElement("li");
            let deleteButton = document.createElement("button");

            deleteButton.innerHTML = "X";
            deleteButton.className = "deleteButton";

            li.innerHTML = shirt.name + " ";
            li.id = shirt.name;
            ul.style.listStyleType = "none";

            li.appendChild(deleteButton);
            ul.appendChild(li);

            this.shirts.push(shirt);

            let deletBtn = document.getElementsByClassName("deleteButton");
            for (let i = 0; i < deletBtn.length; i++) {
                deletBtn[i].addEventListener("click", () => {
                    this.deleteShirt(shirt);
                });
            }
        }
    }

    //TODO update quantity of a shirt
    updateShirt(shirt) {}

    deleteShirt(shirt) {
        document.getElementById(shirt.name).remove();

        for (let i = 0; i < this.shirts.length; i++) {
            if (shirt.name == this.shirts[i].name) {
                this.shirts.splice(i, 1);
            }
        }
        this.showSum();
    }

    showSum() {
        let sum = 0;
        this.shirts.forEach(e => {
            sum += e.price;
        });
        document.getElementById("shoppingCartSum").textContent = "Sum: " + sum.toFixed(2) + " €";
    }
}