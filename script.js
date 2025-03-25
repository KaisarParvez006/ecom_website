const products = [
  {
    id: 1,
    name: 'Nike Air Jordan',
    price: 15999,
    imageUrl: 'https://cdn3.f-cdn.com//files/download/202017283/IMG_20230510_224710_978.jpg?width=780&height=1103&fit=crop'
  },
  {
    id: 2,
    name: 'Nike Air Force',
    price: 13999,
    imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/nike-wallpaper-design-template-23761a2a53a865d58b687c5886500a08_screen.jpg?ts=1664413705'
  },
  {
    id: 3,
    name: 'Nike Dunk',
    price: 14500,
    imageUrl: 'https://i.pinimg.com/736x/ce/7a/bb/ce7abbdd4fc1bf11d14c8ac2fa6d7cd0.jpg'
  }
];

let cart = [];

function displayProducts() {
  const row = document.querySelector('#productGallery .row');
  row.innerHTML = '';
  products.forEach(product => {
    row.innerHTML += `
      <div class="col-md-4 product-card mb-4">
        <div class="card shadow-sm">
          <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">₹${product.price}</p>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        </div>
      </div>`;
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCartDisplay();
  document.getElementById('cartSidebar').style.display = 'block';
}

function updateCartDisplay() {
  const cartItemsList = document.getElementById('cartItemsList');
  const cartTotal = document.getElementById('cartTotal');
  cartItemsList.innerHTML = '';
  let totalPrice = 0;
  cart.forEach((item, index) => {
    totalPrice += item.price;
    cartItemsList.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
      </div>`;
  });
  cartTotal.innerText = `Total: ₹${totalPrice}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

document.getElementById('closeCartButton').addEventListener('click', () => {
  document.getElementById('cartSidebar').style.display = 'none';
});

displayProducts();