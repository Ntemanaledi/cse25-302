
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(car) {
    cart.push(car);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(car + " added to cart!");
}

function updateCartCount() {
    let count = document.getElementById("cart-count");
    if (count) {
        count.textContent = cart.length;
    }
}

updateCartCount();

function filterBrand(brand) {
    let cars = document.querySelectorAll(".car");

    brand = brand.trim().toLowerCase();

    cars.forEach(car => {
        let carBrand = car.getAttribute("data-brand");

        if (carBrand) {
            carBrand = carBrand.trim().toLowerCase();
        }

        car.style.border = "none";
        car.style.opacity = "0.6";

        if (brand === "all") {
            car.style.opacity = "1";
        } 
        else if (carBrand === brand) {
            car.style.border = "3px solid gold";
            car.style.opacity = "1";
        }
    });
}

function searchCars() {
    let input = document.getElementById("searchInput");

    if (!input) return;

    let search = input.value.toLowerCase();
    let cars = document.querySelectorAll(".car");

    cars.forEach(car => {
        let text = car.textContent.toLowerCase();

        if (text.includes(search)) {
            car.style.opacity = "1";
        } else {
            car.style.opacity = "0.2"; 
        }
    });
}

let form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("message").textContent =
            "Message sent successfully!";
    });
}

window.onload = function () {
    updateCartCount();
};
