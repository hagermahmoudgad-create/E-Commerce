import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const isLogged = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-inner container">
        <Link to="/" className="brand">Store</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cart.reduce((s, p) => s + p.qty, 0)})</Link>
          {isLogged ? (
            <button className="btn-link" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
