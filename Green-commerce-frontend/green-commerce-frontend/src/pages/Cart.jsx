import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Ensure price is number
  const total = cart.reduce((sum, item) => sum + Number(item.pricePerKg), 0);

  return (
    <div className="container mt-4">
      <h2 style={{ color: "#2E7D32" }}>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.name} — ₹{item.pricePerKg}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h4>Total Amount: ₹{total}</h4>

          <button
            className="btn btn-success mt-3"
            onClick={() =>
              navigate("/checkout", {
                state: {
                  items: cart,
                  totalPrice: total,
                },
              })
            }
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
