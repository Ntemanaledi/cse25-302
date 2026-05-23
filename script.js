
function searchCars() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    window.location.href = "catalog.html?search=" + input;
}

let params = new URLSearchParams(window.location.search);
let search = params.get("search");

if (search) {
    let cars = document.querySelectorAll(".car");

    cars.forEach(car => {
        if (!car.textContent.toLowerCase().includes(search)) {
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
