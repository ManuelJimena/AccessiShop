import { useState, useEffect } from 'react';
import { useSearchContext } from '@/context/searchContext';
import './Search.css';

const Search = ({ onSearch }) => {
  const { searchActivated, menuOpen, setMenuOpen } = useSearchContext();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setShowSearch(searchActivated);
  }, [searchActivated]);

  const handleButtonClick = () => {
    setShowSearch(!showSearch);
    setMenuOpen(!menuOpen);
    setSearchActivated(!menuOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className={`search ${showSearch ? 'active' : ''}`}>
      <button
        className={`search-button ${showSearch ? 'close' : ''}`}
        onClick={handleButtonClick}
      >
        {showSearch ? (
          <i className="fas fa-times icon" aria-label="Cerrar"></i>
        ) : (
          <i className="fas fa-search icon" aria-label="Búsqueda"></i>
        )}
      </button>
      {showSearch && (
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

export default Search;
