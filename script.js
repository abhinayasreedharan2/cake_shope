let cartCount = 0;


// Add item to cart
function addToCart(cakeName) {

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert(cakeName + " has been added to your cart! 🎂");
}


// Filter cakes
function filterCakes(category) {

    const cakes = document.querySelectorAll(".cake-card");

    cakes.forEach(function(cake) {

        if (category === "all") {
            cake.style.display = "block";
        }

        else if (cake.classList.contains(category)) {
            cake.style.display = "block";
        }

        else {
            cake.style.display = "none";
        }

    });
}


// Contact form
function submitForm(event) {

    event.preventDefault();

    document.getElementById("form-message").textContent =
        "Thank you! Your cake order request has been received. 🎂";

    event.target.reset();
}
