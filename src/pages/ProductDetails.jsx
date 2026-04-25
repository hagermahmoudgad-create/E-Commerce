import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import Loader from "../components/Loader";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message || "Error"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="center">{error}</div>;
  if (!product) return null;

  return (
    <div className="product-details">
      <div className="product-media">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="muted"> Category:{product.category}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <div className="actions">
          <button
            onClick={() => {addToCart(product);
          toast.success("Add to cart successfuly 🛒💜", {
                style: {
                  background: "#1a1a1a",
                  color: "#b184ff",
                  border: "1px solid #5a2ea6"  }, icon: "🛍️" }); }} className="btn" >Add to Cart</button>

         
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
