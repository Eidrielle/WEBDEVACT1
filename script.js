const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

let cartItems = []; // This array will hold the items in the cart

function addToCart(item) {
    // Add the item to the cartItems array
    cartItems.push(item);

    // Update the cart count
    document.getElementById('cartcount').textContent = `(${cartItems.length})`;

    // Alert the user
    alert(`Added "${item}" to cart!`);

    cartCount++;
    document.getElementById('cartcount').textContent = `(${cartCount})`;
    alert(`${item} added to cart!`); 
}

function showCart() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
    } else {
        const modalContent = document.getElementById("modal-content");
        modalContent.innerHTML = ""; // Clear existing content
        
        // Add title "Items in Your Cart"
        const titleElement = document.createElement("h3");
        titleElement.textContent = "Items in Your Cart";
        modalContent.appendChild(titleElement);

        // Add each item to the cart
        cartItems.forEach(item => {
            const itemElement = document.createElement("p");
            itemElement.textContent = item;
            modalContent.appendChild(itemElement);
        });

        showModal();
    }
}

function showModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function placeOrder() {
    closeModal();
    window.location.href = 'cart.html';
    
}

function cancelOrder() {
    closeModal();
    alert("Order Canceled");
    clearCart();
}

function clearCart() {
    // Clear the cart items
    cartItems = [];

    // Update the cart count display to reflect the empty cart
    document.getElementById('cartcount').textContent = `(0)`;
}

// Optionally, update the cart count when the page loads (if you want to retain cart items in localStorage or something similar)
document.addEventListener('DOMContentLoaded', function() {
    // Set initial cart count (if you have persistence like localStorage, you could retrieve it here)
    document.getElementById('cartcount').textContent = `(${cartItems.length})`;
});

document.getElementById('Reservebtn').addEventListener('click', function() {
    // Specify the URL to redirect to
    window.location.href = 'https://www.facebook.com/profile.php?id=100063999944903';
});

document.getElementById('btnproduct').addEventListener('click', function() {
    // Redirect to the about.html page (relative path)
    window.location.href = 'product.html'; // Change this to the desired page
});

