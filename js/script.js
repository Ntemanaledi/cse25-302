
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(car) {
    cart.push(car); 
count) {    localStorage.setItem("cart", JSON.stringify(cart));
        count.textContent = cart.length;
    }
}


function searchCars() {
    let input = document.getElementById("searchInput");

    if (!input) return;

    let search = input.value.toLowerCase();

    window.location.href = "catalog.html?search=" + search;
}


function runSearchFromURL() {
    let params = new URLSearchParams(window.location.search);
    let search = params.get("search");

    if (search) {
        search = search.toLowerCase();
        let cars = document.querySelectorAll(".car");

        cars.forEach(car => {
            let text = car.textContent.toLowerCase();

            if (text.includes(search)) {
                car.style.opacity = "1";
                car.style.transform = "scale(1.05)";
            } else {
                car.style.opacity = "0.3";
                car.style.transform = "scale(1)";
            }
        });
    }
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
    runSearchFromURL();
};
    updateCartCount();
    alert(car + " added to cart!");
}

function updateCartCount() {
    let count = document.getElementById("cart-count");
