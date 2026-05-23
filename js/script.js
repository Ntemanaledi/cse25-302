function searchCars() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cars = document.querySelectorAll(".car");

    cars.forEach(car => {
        let text = car.textContent.toLowerCase();

        if (text.includes(input)) {
            car.style.display = ""; 
        } else {
            car.style.display = "none"; 
        }
    });
}
let params = new URLSearchParams(window.location.search);
let search = params.get("search");

if (search) {
    let cars = document.querySelectorAll(".car");

    cars.forEach(car => {
        let text = car.textContent.toLowerCase();

        if (text.includes(search)) {
            car.style.display = "";
        } else {
            car.style.display = "none";
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

    cars.forEach(car => {
        let carBrand = car.getAttribute("data-brand");

        if (brand === "all") {
            car.style.display = "";
        }
        else if (carBrand === brand) {
            car.style.display = "";
        }
        else {
            car.style.display = "none";
        }
    });
}
