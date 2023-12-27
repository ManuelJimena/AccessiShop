import { useState, useEffect } from "react";
import GalleryElectrónica from "../../components/GalleryElectrónica/GalleryElectrónica";
import axios from "axios";
import Search from "../../components/Search/Search";
import "./Electrónica.css";
import Spinner from "../../components/Spinner/Spinner";

const Electrónica = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://accessi-shop-backend.vercel.app/products/category/electronica")
      .then((response) => {
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener todos los productos:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = async (term) => {
    try {
      setLoading(true);

      const response = await axios.get(`https://accessi-shop-backend.vercel.app/products/name/${term}`);
      const allProducts = response.data;

      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );

      setFilteredProducts(filtered);
      setSearchTerm(term);
      setLoading(false);
    } catch (error) {
      console.error("Error al filtrar productos:", error);
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="titulo-main">
        <h2>Electrónica</h2>
        <Search onSearch={handleSearch} />
      </div>

      {loading ? ( 
        <Spinner />
      ) : filteredProducts.length > 0 ? (
        <GalleryElectrónica filteredProducts={filteredProducts} />
      ) : (
        <p>No se encontraron resultados para "{searchTerm}".</p>
      )}
    </main>
  );
};

export default Electrónica;
