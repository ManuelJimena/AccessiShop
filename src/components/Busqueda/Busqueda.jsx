import { useState } from 'react';
import './Busqueda.css';

const Busqueda = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleButtonClick = () => {
    setShowSearch(!showSearch);
    setShowMenu(!showMenu);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className={`busqueda ${showMenu ? 'active' : ''}`}>
      <button
        className={`search-button ${showMenu ? 'close' : ''}`}
        onClick={handleButtonClick}
      >
        {showMenu ? (
          <i className="fas fa-times icon" aria-label="Cerrar"></i>
        ) : (
          <i className="fas fa-search icon" aria-label="Búsqueda"></i>
        )}
      </button>
      {showMenu && (
        <div className="search-menu">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar productos"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Busqueda;
