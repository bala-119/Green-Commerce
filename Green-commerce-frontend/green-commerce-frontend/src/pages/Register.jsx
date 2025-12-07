import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        { name, email, password }
      );

      console.log("REGISTER RESPONSE:", response.data);
      alert("Registered successfully! Please login.");
      navigate("/login");

    } catch (error) {
      console.error("REGISTER ERROR:", error);
      alert("Registration failed. Check backend.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#E8F5E9" }}
    >
      <div
        className="p-4"
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          width: "350px",
        }}
      >
        <h2 style={{ color: "#2E7D32", textAlign: "center", marginBottom: "1.5rem" }}>
          Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
              style={{ borderRadius: "5px" }}
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
              style={{ borderRadius: "5px" }}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
              style={{ borderRadius: "5px" }}
            />
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#2E7D32",
              color: "white",
              borderRadius: "5px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1B5E20")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2E7D32")}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
