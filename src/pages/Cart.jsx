import React from "react";
import { useCart } from "../context/CartContext";


const Cart = () => {
  const { cart, removeFromCart, updateQty, clearCart, total } = useCart();

  if (cart.length === 0)
    return <div className="center"><h3>Eympty Cart</h3></div>;

  return (
    <div>
      <h1 className="page-title">Payment cart</h1>
      <div className="cart-list">
        {cart.map((p) => (
          <div key={p.id} className="cart-item">
            <img src={p.image} alt={p.title} />
            <div className="cart-info">
              <h4>{p.title}</h4>
              <p>${p.price.toFixed(2)}</p>
              <div className="qty">
                <label>count: </label>
                <input
                  type="number"
                  min="1"
                  value={p.qty}
                  onChange={(e) => updateQty(p.id, Math.max(1, Number(e.target.value)))}
                />
              </div>
            </div>
            <div className="cart-actions">
              <button className="btn btn-outline" onClick={() => removeFromCart(p.id)}>remove From Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${total.toFixed(2)}</h3>
        <div className="cart-buttons">
          <button className="btn" onClick={() => alert("Added Successfuly")}>Add to cart</button>
          <button className="btn btn-outline" onClick={clearCart}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
 