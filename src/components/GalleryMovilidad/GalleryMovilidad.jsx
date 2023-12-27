import { useState, useContext } from "react";
import ShopBtn from "../ShopBtn/ShopBtn";
import { CartContext } from "../../context/CartContext";

const GalleryMovilidad = ({ filteredProducts }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useContext(CartContext);

    const renderStarRating = (quality) => {
        const stars = [];
        for (let i = 1; i <= quality; i++) {
          stars.push(<span key={i}>⭐</span>);
        }
        return stars;
      };
    
      const detailPage = (product) => {
        setSelectedProduct(product);
      };

    return (
        <div className="movilidad-container">
        {filteredProducts.map((product) => (
          <div key={product._id} className="product-card">
            <div className="product-image">
              <img
                src={product.picture}
                alt={product.name}
                onClick={() => detailPage(product)}
              />
            </div>
            <div className="product-info">
              <div className="info-detail">
                <h3>{product.name}</h3>
                <p>Precio: {product.price} €</p>
              </div>
            </div>
          </div>
        ))}
  
        {selectedProduct && (
          <div className="detail_container">
            <div className="detail_contant">
              <i
                className="fa-solid fa-circle-xmark"
                onClick={() => setSelectedProduct(null)}
              ></i>
              <div className="detail_info">
                <div className="img-box">
                  <img
                    src={selectedProduct.picture}
                    alt={selectedProduct.name}
                  ></img>
                </div>
                <div className="product_detail">
                  <h3>{selectedProduct.name}</h3>
                  <span>{renderStarRating(selectedProduct.quality)}</span>
                  <h2>Precio: {selectedProduct.price} €</h2>
                  <p>{selectedProduct.description}</p>
                  <ShopBtn product={selectedProduct} addToCart={addToCart} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

export default GalleryMovilidad
