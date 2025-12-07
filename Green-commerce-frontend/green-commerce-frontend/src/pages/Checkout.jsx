import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, totalPrice } = location.state || { items: [], totalPrice: 0 };

  const handlePlaceOrder = () => {
    navigate("/bill", {
      state: {
        items,
        totalPrice,
        date: new Date().toLocaleString(),
      },
    });
  };

  return (
    <div className="container mt-4">
      <h2 style={{ color: "#2E7D32" }}>Checkout</h2>

      <h4>Order Summary</h4>
      <ul className="list-group mb-3">
        {items.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} — ₹{item.pricePerKg}
          </li>
        ))}
      </ul>

      <h4>Total: ₹{totalPrice}</h4>

      <button className="btn btn-primary mt-3" onClick={handlePlaceOrder}>
        Confirm Order
      </button>
    </div>
  );
};

export default Checkout;
