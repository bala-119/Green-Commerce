import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2E7D32" }}>
      <div className="container-fluid px-4">
        <Link className="navbar-brand text-white fw-bold" to="/">
          Green-Commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {/* Public Links */}
            {!token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}

            {/* Logged-in Links */}
            {token && (
              <>
                {/* Admin */}
                {role === "ROLE_ADMIN" && (
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/admin/dashboard">
                      Admin Dashboard
                    </Link>
                  </li>
                )}

                {/* User */}
                {role === "ROLE_USER" && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/user/dashboard">
                        User Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/cart">
                        My Cart
                      </Link>
                    </li>
                  </>
                )}

                {/* Logout */}
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light ms-3"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
