import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [discounts, setDiscounts] = useState({}); // Track input values

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        const res = await axiosClient.get("/products");
        if (isMounted) setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleDiscountChange = (id, value) => {
    setDiscounts({ ...discounts, [id]: value });
  };

  const applyDiscount = async (productId) => {
    try {
      const discountValue = parseFloat(discounts[productId]) || 0;

      const res = await axiosClient.put(`/products/${productId}/discount`, {
        discount: discountValue,
      });

      setProducts((prev) =>
        prev.map((p) => (p.id === productId ? res.data : p))
      );

      alert("Discount applied successfully!");
    } catch (error) {
      console.error("Error applying discount:", error);
      alert("Failed to apply discount.");
    }
  };

  return (
    <div
      className="container mt-4"
      style={{
        backgroundColor: "#F5F5F5",
        minHeight: "100vh",
        padding: "2rem",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ color: "#2E7D32" }}>Admin Dashboard</h2>
      <p style={{ color: "#555" }}>Manage Products & Apply Discounts</p>

      {products.length === 0 ? (
        <p style={{ color: "#555" }}>No products available.</p>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-3" key={product.id}>
              <div
                className="card h-100 shadow-sm"
                style={{ border: "1px solid #81C784", borderRadius: "10px" }}
              >
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "150px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ color: "#2E7D32" }}>
                    {product.name}
                  </h5>
                  <p className="card-text" style={{ color: "#555" }}>
                    Price: ${product.pricePerKg}
                  </p>
                  <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="Discount %"
                    value={discounts[product.id] || ""}
                    onChange={(e) =>
                      handleDiscountChange(product.id, e.target.value)
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    }}
                  />
                  <button
                    className="btn mt-auto"
                    style={{
                      backgroundColor: "#2E7D32",
                      color: "white",
                      borderRadius: "5px",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#1B5E20")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#2E7D32")}
                    onClick={() => applyDiscount(product.id)}
                  >
                    Apply Discount
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

export default AdminDashboard;
