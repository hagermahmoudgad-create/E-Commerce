import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="card-image-wrap">
        <img src={product.image} alt={product.title} className="card-image" />
      </Link>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-price">${product.price.toFixed(2)}</p>
        <div className="card-actions">
          <Link to={`/product/${product.id}`} className="btn">View</Link>

<button
  onClick={() => {
    onAdd(product);

    toast.success("Add to cart successfuly 🛒💜", {
      style: {
        background: "#1a1a1a",
        color: "#b184ff",
        border: "1px solid #5a2ea6"
      },
      icon: "🛍️"
    });
  }}
  className="btn"
>
  Add to Cart
</button>


        </div>
      </div>
    </div>
  );
};

export default ProductCard;
