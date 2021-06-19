document.addEventListener("DOMContentLoaded", function(event) {

    /**
     * cleans the shop interface
     */
    function switchToMen() {
        const menShirt = ["../img/shop/white-men_tshirt_1.png", "../img/shop/white-men_tshirt_2.png", "../img/shop/black_pullover_1.png", "../img/shop/black_pullover_2.png"];
        
        document.getElementById("start").remove();
        document.getElementById("women_btn").remove();
        document.getElementById("men_btn").remove();
        document.getElementById("shopOverview").remove();

        createShop(menShirt, "men");
    }

    /**
     * cleans the shop interface
     */
    function switchToWomen() {
        const womenShirt = ["../img/shop/white-women_tshirt_1.png", "../img/shop/white-women_tshirt_2.png", "../img/shop/black_pullover_1.png", "../img/shop/black_pullover_2.png"];

        document.getElementById("start").remove();
        document.getElementById("women_btn").remove();
        document.getElementById("men_btn").remove();
        

        createShop(womenShirt, "women");
    }

    /**
     * displays the shop based on the array of shirts
     * @param {array of tshirt filled with men or women shirts} list_of_shirts
     * @param {string of which gender is to be visited} gender
     */
    function createShop(list_of_shirts, gender) {
        let main = document.getElementById("mainShopScreen");
        let table = document.createElement("table");
        let tableR = document.createElement("tr");
        let tableD = document.createElement("td");

        // Creates for every T-Shirt an image and displays it
        for(let i = 0; i < list_of_shirts.length; i++) {
            let img = document.createElement("img");
            let tmp = tableD.appendChild(img);
            tmp.src = list_of_shirts[i];
            tmp.className = gender;
        }

        // Needed to create a second tr
        let tableR2 = document.createElement("tr");

        // Creates one button for each T-Shirt
        for (let i = 0; i < list_of_shirts.length; i++) {
            let button = document.createElement("input");
            button.type = "button";
            button.value = "Add to shopping cart";
            button.className = "addTo_btn";
            tableR2.appendChild(button);
        }

        tableR.appendChild(tableD);
        table.appendChild(tableR);
        table.appendChild(tableR2);

        main.appendChild(table);

        let addToCart = document.getElementsByClassName("addTo_btn");

        for (let i = 0; i < addToCart.length; i++) {
            addToCart[i].addEventListener("click", function () {
                if (i == 0) {
                    addToShoppingCart("Red Lips Shirt");
                }
                if (i == 1) {
                    addToShoppingCart("Grey Eyes Shirt");
                }
                if (i == 2) {
                    addToShoppingCart("Sahani Logo Pullover");
                }
                if (i == 3) {
                    addToShoppingCart("Marksman & Support Pullover");
                }
            });
        }
    }

    /**
     * @param {name of the added item} item 
     * adds an item to the shopping cart
     */
    function addToShoppingCart(item) {
        let ul = document.getElementById("shoppingCart");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
    }
    
    let changeToMen = document.getElementById("women_btn");
    let changeToWomen = document.getElementById("men_btn");
    changeToMen.addEventListener("click", switchToWomen);
    changeToWomen.addEventListener("click", switchToMen);
});