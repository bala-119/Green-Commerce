import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import { useCart } from "../context/CartContext";

const UserDashboard = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosClient.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mt-4" style={{ backgroundColor: "#F5F5F5", minHeight: "100vh", padding: "2rem", borderRadius: "8px" }}>
      <h2 style={{ color: "#2E7D32" }}>User Dashboard</h2>
      <p style={{ color: "#555" }}>Welcome to Green-Commerce!</p>
      <p style={{ fontWeight: "bold", color: "#2E7D32" }}>Items in Cart: {cart.length}</p>

      <h4 style={{ color: "#2E7D32", marginTop: "2rem" }}>Available Products</h4>
      {products.length === 0 ? (
        <p style={{ color: "#555" }}>No products available.</p>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-3" key={product.id}>
              <div className="card h-100 shadow-sm" style={{ border: "1px solid #81C784" }}>
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#2E7D32" }}>{product.name}</h5>
                  <p className="card-text" style={{ color: "#555" }}>Price: ${product.pricePerKg}</p>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#2E7D32",
                      color: "white",
                      borderRadius: "5px",
                      width: "100%",
                      transition: "0.3s",
                    }}
                    onClick={() => addToCart(product)}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#1B5E20")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#2E7D32")}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
