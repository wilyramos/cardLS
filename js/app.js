let cart = [];
let total = 0;

document.addEventListener('DOMContentLoaded', () => {
     const cartStorage = localStorage.getItem('cart');
     const totalStorage = localStorage.getItem('total');
     renderCart();
     if (cartStorage) {
          cart = JSON.parse(cartStorage);
          total = parseFloat(totalStorage);
          renderCart();
     }
});

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  renderCart();
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById('cart');
  const totalSpan = document.getElementById('total');
  
  cartDiv.innerHTML = ''; // Limpiar el carrito antes de mostrar los elementos
  cart.forEach((item, index) => {
    cartDiv.innerHTML += `<p>${item.product} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Eliminar</button></p>`;
  });

  totalSpan.innerText = total.toFixed(2); // Actualizar el total

  //save cart in local storage

  syncronizeStorage();
}

function syncronizeStorage() {
     localStorage.setItem('cart', JSON.stringify(cart));
     localStorage.setItem('total', total);
}

