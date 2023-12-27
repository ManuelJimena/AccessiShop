import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchActivated, setSearchActivated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTermExternal, setSearchTermExternal] = useState('');

  return (
    <SearchContext.Provider value={{ searchActivated, setSearchActivated, menuOpen, setMenuOpen, searchTermExternal, setSearchTermExternal }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
