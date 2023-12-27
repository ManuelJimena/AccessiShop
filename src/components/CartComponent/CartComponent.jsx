import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import "./CartComponent.css";

const CartComponent = () => {
  const { cart, clearCart, updateQuantity, removeFromCart } = useContext(CartContext);
  const [cartOpen, setCartOpen] = useState(false);

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleClearCart = () => {
    clearCart();
    setCartOpen(false);
  };

  return (
    <div className="cart-container">
      <div className="cart-icon-container" onClick={() => setCartOpen(!cartOpen)}>
        <i className="fas fa-shopping-cart cart-icon"></i>
        {cart.length > 0 && <span className="cart-item-count">{cart.length}</span>}
      </div>
      {cartOpen && (
        <div className="cart-menu">
          <div className="cart-header">
            <h3>Carrito de la compra</h3>
          </div>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <img src={item.picture} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">
                    {new Intl.NumberFormat("es-ES", {
                      style: "currency",
                      currency: "EUR",
                    }).format(item.price)}
                  </p>
                  <div className="quantity-controls">
                    <button className="cart-item-restar" onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="cart-item-sumar" onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
                    <button onClick={() => removeFromCart(item._id)} className="delete-icon">
                    <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <p>
              Total:{" "}
              {new Intl.NumberFormat("es-ES", {
                style: "currency",
                currency: "EUR",
              }).format(getTotal())}
            </p>
            <div className="cart-footer-btn">
            <button className="clear-cart" onClick={handleClearCart}>Vaciar Carrito</button>
            <Link to="/pagos" ><button className="buy-cart" onClick={() => setCartOpen(!cartOpen)}>Pagar<i className="fa-regular fa-credit-card"></i></button></Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
