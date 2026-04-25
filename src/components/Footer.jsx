import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0a0a0a",
        padding: "40px 20px",
        marginTop: "40px",
        borderTop: "1px solid #4b1fa3",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* -------------- LOGO + TEXT -------------- */}
        <div style={{ flex: "1 1 250px", marginBottom: "20px" }}>
          <h2 style={{ color: "#b184ff", marginBottom: "10px" }}> Store</h2>
          <p style={{ color: "#ccc", maxWidth: "250px", lineHeight: "1.6" }}>
           
           
          </p>
        </div>

        {/* -------------- QUICK LINKS -------------- */}
        <div style={{ flex: "1 1 150px", marginBottom: "20px" }}>
          <h3 style={{ color: "#8d5bf5", marginBottom: "10px" }}> Quick Links</h3>

          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>
              <Link style={{ color: "#ccc", textDecoration: "none" }} to="/">
                Home
              </Link>
            </li>

            <li>
              <Link
                style={{ color: "#ccc", textDecoration: "none" }}
                to="/products"
              >
                products
              </Link>
            </li>

            <li>
              <Link
                style={{ color: "#ccc", textDecoration: "none" }}
                to="/cart"
              >
                Cart
              </Link>
            </li>

            <li>
              <Link
                style={{ color: "#ccc", textDecoration: "none" }}
                to="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* -------------- SOCIAL ICONS -------------- */}
        <div style={{ flex: "1 1 150px", marginBottom: "20px" }}>
          <h3 style={{ color: "#8d5bf5", marginBottom: "10px" }}>
            contact us
          </h3>

          <div
            style={{
              display: "flex",
              gap: "15px",
              fontSize: "22px",
            }}
          >
            <a href="#" style={{ color: "#b184ff" }}>
              <FaFacebook />
            </a>

            <a href="#" style={{ color: "#b184ff" }}>
              <FaInstagram />
            </a>

            <a href="#" style={{ color: "#b184ff" }}>
              <FaGithub />
            </a>

            <a href="#" style={{ color: "#b184ff" }}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* --------- COPYRIGHT --------- */}
      <p
        style={{
          textAlign: "center",
          marginTop: "30px",
          color: "#aaa",
          borderTop: "1px solid #4b1fa3",
          paddingTop: "10px",
        }}
      >
        © {new Date().getFullYear()} — Designed by <span style={{ color: "#b184ff" }}>
          Hager Mahmoud
        </span>
      </p>
    </footer>
  );
};

export default Footer;
