class Shirt {
    /**
     * Creates a shirt based on the parameters
     * @constructor
     * @param {string} gender - Either "male" or "female"
     * @param {string} name - Name of the Shirt
     * @param {int} price - Price of the Shirt
     * @param {string} image - Path to an Image 
     * @param {int} stockQuantity - Quantity of the Shirt
     * @param {int} cartQuantity - Amount of shirts in shopping cart
     */
    constructor(gender, name, price, image, stockQuantity) {
        this.gender = gender;
        this.name = name;
        this.price = price;
        this.image = image;
        this.stockQuantity = stockQuantity;
        this.cartQuantity = 1;
    }
}

class Shop {
    /**
     * @constructor
     */
    constructor() {
        this.main = document.getElementById("mainShopScreen");
    }

    /**
     * Creates the shop base on given params
     * @param {Object[]} shirts - Array with Shirt Objects
     * @param {string} gender - Contains either "men" or "women"
     */
    async createShop(shirts, gender) {
        this.shoppingCart = new ShoppingCart();
        const maxShirtQuantity = 5;

        let table = document.createElement("table");
        let tableR = document.createElement("tr");
        let tableD = document.createElement("td");

        // Creates an image for every T-Shirt and displays it
        for (let i = 0; i < shirts.length; i++) {
            let img = document.createElement("img");
            let td = document.createElement("td");
            let tmp = td.appendChild(img);
            tmp.src = shirts[i].image;
            tmp.className = gender;
            table.appendChild(td);
        }

        // Needed to create a second tr
        let tableR2 = document.createElement("tr");

        // Creates one button for each T-Shirt
        for (let i = 0; i < shirts.length; i++) {
            let button = document.createElement("input");
            let td = document.createElement("td");
            let select = document.createElement("select");

            td.className = "td2";

            // Creates a select button
            for (let j = 1; j <= maxShirtQuantity; j++) {
                let options = document.createElement("option");
                options.value = j;
                options.text = j;
                select.appendChild(options);
            }

            select.className = "selectQuantity";

            button.type = "button";
            button.value = "Add to shopping cart";
            button.className = "addTo_btn";

            td.appendChild(button);
            td.appendChild(select);
            tableR2.appendChild(td);
        }

        tableR.appendChild(tableD);
        table.appendChild(tableR);
        table.appendChild(tableR2);

        this.main.appendChild(table);

        let addToCart = document.getElementsByClassName("addTo_btn");
        let quantity = document.getElementsByClassName("selectQuantity");

        for (let i = 0; i < addToCart.length; i++) {
            addToCart[i].addEventListener("click", () => {
                shirts[i].cartQuantity = quantity[i].value;
                this.shoppingCart.addShirt(shirts[i]);
                this.shoppingCart.showSum();
            });
        }
    }

    /**
     * Creates Shirt Object for every 
     */
    async showWomenSection() {
        let shirts = [];

        document.getElementById("start").remove();
        document.getElementById("women_btn").remove();
        document.getElementById("men_btn").remove();

        xhttp.onload = function () {
            let data = JSON.parse(xhttp.responseText)
            for (let i = 0; i < data.length; i++) {
                if (data[i] != null) {
                    if (data[i].shirtGender == "female" || data[i].shirtGender == "unisex") {
                        shirts.push(new Shirt(data[i].shirtGender, data[i].shirtName, data[i].shirtPrice, data[i].shirtImage, data[i].shirtQuantity))
                    }
                }
            }
            shop.createShop(shirts, "women")
        }
        xhttp.open("GET", serverUrl, true)
        xhttp.send()

        // Fetches the shirts from the api with the gender female or unisex
        /*fetch(serverUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Server not reachable');
                } else {
                    return response.json();
                }
            })
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i] != null) {
                        if (data[i].shirtGender == "female" || data[i].shirtGender == "unisex") {
                            shirts.push(new Shirt(data[i].shirtName, data[i].shirtPrice, data[i].shirtImage, data[i].shirtQuantity));
                        }
                    }
                }
                this.createShop(shirts, "women");
            });*/
    }

    /**
     * Creates Shirt Object for every 
     */
    async showMenSection() {
        let shirts = [];

        document.getElementById("start").remove();
        document.getElementById("women_btn").remove();
        document.getElementById("men_btn").remove();

        xhttp.onload = function () {
            let data = JSON.parse(xhttp.responseText)
            for (let i = 0; i < data.length; i++) {
                if (data[i] != null) {
                    if (data[i].shirtGender == "male" || data[i].shirtGender == "unisex") {
                        shirts.push(new Shirt(data[i].shirtGender, data[i].shirtName, data[i].shirtPrice, data[i].shirtImage, data[i].shirtQuantity));
                    }

                }

            }
            shop.createShop(shirts, "men")
        }
        xhttp.open("GET", serverUrl, true);
        xhttp.send();

        // Fetches the shirts from the api with the gender male or unisex
        /*fetch(serverUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Server not reachable');
                } else {
                    return response.json();
                }
            })
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i] != null) {
                        if (data[i].shirtGender == "male" || data[i].shirtGender == "unisex") {
                            shirts.push(new Shirt(data[i].shirtName, data[i].shirtPrice, data[i].shirtImage, data[i].shirtQuantity));
                        }
    
                    }
                }
                this.createShop(shirts, "men");
            });*/
    }
}

class ShoppingCart {
    /**
     * Create an empty shopping cart
     * @constructor
     */
    constructor() {
        this.shoppingCartSum = 0;
        this.shirts = [];

        this.aside = document.getElementById("shopOverview");
        this.h2 = document.createElement("h2");
        this.ul = document.createElement("ul");
        this.div = document.createElement("div");
        this.checkOut = document.createElement("input");

        this.checkOut.type = "button";
        this.checkOut.value = "Check out";
        this.checkOut.id = "checkOut";

        this.shoppingCartHeading = document.createTextNode("Shopping Cart");

        this.div.id = "shoppingCartSum";
        this.div.textContent = "Sum: " + this.shoppingCartSum + " €";

        this.h2.appendChild(this.shoppingCartHeading);

        this.aside.appendChild(this.h2);
        this.aside.appendChild(this.ul);
        this.aside.appendChild(this.div);
        this.aside.appendChild(this.checkOut)

        this.checkOutBTN = document.getElementById("checkOut");
    }

    /**
     * Adds a shirt to the shopping cart
     * @param {Object} shirt - Object from Type Shirt
     */
    addShirt(shirt) {
        if (this.shirts.includes(shirt)) {
            this.updateShirt(shirt)
        } else {
            let ul = document.getElementsByTagName("ul")[1];
            let li = document.createElement("li");
            let deleteButton = document.createElement("button");

            deleteButton.innerHTML = "X";
            deleteButton.className = "deleteButton";

            li.innerHTML = shirt.cartQuantity + "x " + shirt.name + " " + (shirt.price * shirt.cartQuantity).toFixed(2) + "€ ";
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
            this.checkOutBTN.addEventListener("click", () => {
                this.cartCheckOut(this.shoppingCartSum)
            })
        }
    }

    /**
     * Updates the quantity from a shirt
     * @param {Object} shirt - Object from type shirt
     */
    updateShirt(shirt) {
        let update = document.getElementById(shirt.name);
        let deleteButton = document.createElement('button');

        deleteButton.innerHTML = "X";
        deleteButton.className = "deleteButton";

        update.innerHTML = shirt.cartQuantity + "x " + shirt.name + " " + (shirt.price * shirt.cartQuantity).toFixed(2) + "€ ";
        update.appendChild(deleteButton);

        let deletBtn = document.getElementsByClassName("deleteButton");
        for (let i = 0; i < deletBtn.length; i++) {
            deletBtn[i].addEventListener("click", () => {
                this.deleteShirt(shirt);
            });
        }
        this.checkOutBTN.addEventListener("click", () => {
            this.cartCheckOut(this.shoppingCartSum)
        })
    }


    /**
     * Removes an entry from the shopping cart
     * @param {Object} shirt - Object from type shirt 
     */
    deleteShirt(shirt) {
        document.getElementById(shirt.name).remove();

        for (let i = 0; i < this.shirts.length; i++) {
            if (shirt.name == this.shirts[i].name) {
                this.shirts.splice(i, 1);
            }
        }
        this.checkOutBTN.addEventListener("click", () => {
            this.cartCheckOut()
        })
        this.showSum(this.shoppingCartSum);
    }

    /**
     * Shows the sum of all objects in the shopping cart
     */
    showSum() {
        let sum = 0
        this.shirts.forEach(e => {
            sum += e.cartQuantity * e.price;
        });

        this.shoppingCartSum = sum;

        document.getElementById("shoppingCartSum").textContent = "Sum: " + sum.toFixed(2) + " €";
    }

    /**
     * Clears all elements and displays the total sum
     * @param {int} sum - Total of all the items bought 
     */
    async cartCheckOut(sum) {
        for (let i = 0; i < this.shirts.length; i++) {
            // Deletes a shirt from the database if the stock is empty
            if (this.shirts[i].cartQuantity === "5") {
                let index = 0;
                switch (this.shirts[i].name) {
                    case "Red Lips":
                        index = 0;
                        break;
                    case "Grey Eyes":
                        index = 1;
                        break;
                    case "Sahani Logo":
                        index = 2;
                        break;
                    case "Marksman &  Support":
                        index = 3;
                        break;
                }
                xhttp.open("DELETE", serverUrl + "/delete/" + index);
                xhttp.setRequestHeader("Accept", "application/json");
                this.deleteShirt(this.shirts[i]);
                xhttp.send();
            } else {
                // Updates stock quantity if a shirt was bought
                let index = 0;
                switch (this.shirts[i].name) {
                    case "Red Lips":
                        index = 0;
                        break;
                    case "Grey Eyes":
                        index = 1;
                        break;
                    case "Sahani Logo":
                        index = 2;
                        break;
                    case "Marksman &  Support":
                        index = 3;
                        break;
                }
                xhttp.open("PUT", serverUrl + "/" + index);
                xhttp.setRequestHeader("Content-Type", "application/json");
                let data = {
                    "shirtGender": this.shirts[i].gender,
                    "shirtName": this.shirts[i].name,
                    "shirtPrice": this.shirts[i].price,
                    "shirtImage": this.shirts[i].image,
                    "shirtQuantity": 5 - this.shirts[i].cartQuantity
                };
                this.updateShirt(this.shirts[i]);
                xhttp.send(JSON.stringify(data));
            }
        }
        let main = document.getElementById("mainShopScreen");

        let h1 = document.createElement("h1");
        h1.style.textAlign = "center";
        h1.style.marginTop = "200px";

        let total = document.createTextNode("Successful checkout with a total price of " + sum + " €");

        h1.appendChild(total);

        const removeChilds = (parent) => {
            while (parent.lastChild) {
                parent.removeChild(parent.lastChild);
            }
        };

        removeChilds(main);
        main.appendChild(h1);
    }
}

const shop = new Shop;
const serverUrl = 'http://localhost:3000/api/shirts';
const xhttp = new XMLHttpRequest();

let showMen = document.getElementById("men_btn");
let showWomen = document.getElementById("women_btn");

showMen.addEventListener("click", () => {
    shop.showMenSection()
});
showWomen.addEventListener("click", () => {
    shop.showWomenSection()
});