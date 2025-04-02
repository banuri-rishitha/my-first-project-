document.addEventListener("DOMContentLoaded", () => {
    updateCart();
});

function updateCart() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let cartTable = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    cartTable.innerHTML = "";
    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove-btn" onclick="removeItem(${index})">Remove</button></td>
        `;
        cartTable.appendChild(row);
        totalPrice += item.price * item.quantity;
    });

    cartTotal.innerText = totalPrice.toFixed(2);
}

function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateCart();
}

// Checkout Button Click
document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Redirecting to payment gateway...");
});
