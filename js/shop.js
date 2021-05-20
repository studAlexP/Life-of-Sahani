document.addEventListener("DOMContentLoaded", function(event) {

    function switchToMen() {
        let img = document.getElementsByClassName("women");
        const menShirt = ["/img/shop/white-men_tshirt_1.png", "/img/shop/white-men_tshirt_2.png"];

        for (let i = 0; i < menShirt.length; i++) {
            img[i].src = menShirt[i];
            img[i].className = "men";
            img[i].alt = "men tshirt";
            
        }
    }

    function switchToWomen() {
        var img = document.getElementsByClassName("men");
        const womenShirt = ["/img/shop/white-women_tshirt_1.png", "/img/shop/white-women_shirt_2.png"];
        let i = 0;

        for (i = 0; i < womenShirt.length; i++) {
            img[i].src = womenShirt[i];
            img[i].className = "women";
            img[i].alt = "women tshirt";
        }
    }

    let changeToMen = document.getElementById("women_btn");
    let changeToWomen = document.getElementById("men_btn");
    changeToMen.addEventListener("click",switchToWomen);
    changeToWomen.addEventListener("click", switchToMen);
});