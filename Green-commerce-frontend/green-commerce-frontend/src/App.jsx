import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Bill from "./pages/Bill";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* User Dashboard */}
          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute role="ROLE_USER">
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          {/* Admin Dashboard */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute role="ROLE_ADMIN">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Cart Page */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute role="ROLE_USER">
                <Cart />
              </ProtectedRoute>
            }
          />

          {/* Checkout Page */}
          <Route
            path="/checkout"
            element={
              <ProtectedRoute role="ROLE_USER">
                <Checkout />
              </ProtectedRoute>
            }
          />

          {/* Bill Page */}
          <Route
            path="/bill"
            element={
              <ProtectedRoute role="ROLE_USER">
                <Bill />
              </ProtectedRoute>
            }
          />

          {/* Default */}
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
