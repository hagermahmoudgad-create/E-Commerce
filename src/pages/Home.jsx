import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { useCart } from "../context/CartContext";
import BannerSlider from "../components/BannerSlider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message || "Error"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  if (error) return <div className="center">{error}</div>;

  return (
    
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        theme="dark" 
      />
      <BannerSlider />
      <h1 className="page-title">Products</h1>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
