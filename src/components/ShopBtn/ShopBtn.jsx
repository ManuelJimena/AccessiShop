import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ShopBtn.css';

const ShopBtn = ({ product }) => {
  const [clicked, setClicked] = useState(false);
  const { addToCart } = useContext(CartContext);

  const cartClick = () => {
    addToCart(product);
    setClicked(true);
    console.log("Producto añadido al carrito:", product);
  };

  return (
    <button className={`cart-button ${clicked ? 'clicked' : ''}`} onClick={cartClick}>
      <span className="add-to-cart">Añadir al carrito</span>
      <span className="added">Añadido</span>
      <i className="fas fa-shopping-cart"></i>
      <i className="fas fa-box"></i>
    </button>
  );
};

export default ShopBtn;
