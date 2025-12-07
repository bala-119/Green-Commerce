// utils/cart.js

// Get cart from localStorage
export const getCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

// Save cart to localStorage
export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Add product to cart
export const addToCart = (product) => {
  let cart = getCart();
  const index = cart.findIndex((item) => item.id === product.id);

  if (index !== -1) {
    cart[index].quantity += 1; // increase quantity if exists
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
};

// Remove product from cart
export const removeFromCart = (productId) => {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
};

// Clear entire cart
export const clearCart = () => {
  localStorage.removeItem("cart");
};
