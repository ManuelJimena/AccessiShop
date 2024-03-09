import "./Header.css";
import { useEffect, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from '@/context/userContext';
import { useSearchContext } from "@/context/searchContext";
import LoginMenu from "@components/LoginMenu/LoginMenu";
import CartComponent from "../CartComponent/CartComponent";
import Avatar from "../Avatar/Avatar";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const { setSearchActivated, setMenuOpen, setSearchTermExternal, menuOpen } = useSearchContext();
  const [searchIconRotated, setSearchIconRotated] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);
    const handleScroll = () => {
      header.classList.toggle("sticky", window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setNavbar(!navbar);
  };

  const handleLinkClick = () => {
    setNavbar(false);
  };

  const handleLoginClick = () => {
    setLoginModalOpen(true);
    setOverlayVisible(true);
  };

  const handleCloseModal = () => {
    setLoginModalOpen(false);
    setOverlayVisible(false);
  };

  const handleSearchClick = () => {
    setSearchActivated(!menuOpen);
    setMenuOpen(!menuOpen);
    setSearchTermExternal('');
    setSearchIconRotated(!searchIconRotated);
  };

  return (
    <header className="header" translate="no">
      {overlayVisible && <div className="overlay"></div>}
        <div className="logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1703200479/AccessiSolutions/AccessiSolutions-Logo_bf0pts.webp"
            alt="Logo"
            className="logo-image"
          />
          </Link>
          <h1 className="logo-text">AccessiShop</h1>
        </div>
      <button
        className={`fas ${navbar ? "fa-times" : "fa-bars"}`}
        id="menu-icon"
        onClick={handleClick}
      ></button>
      <i
        id="search-left"
        className={`fas ${menuOpen ? 'fa-times' : 'fa-search'} icon ${searchIconRotated ? 'rotate-180' : ''}`}
        aria-label="Búsqueda"
        onClick={handleSearchClick}
      ></i>
      <nav className={`navbar ${navbar ? "activo" : ""}`} id="navbar">
        <ul>
          <li>
            <NavLink
              className="inicio-navbar"
              to="/"
              id="homelink"
              onClick={handleLinkClick}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className="movilidad-navbar"
              to="movilidad"
              id="movilidadlink"
              onClick={handleLinkClick}
            >
              Movilidad
            </NavLink>
          </li>
          <li>
            <NavLink
              className="electrónica-navbar"
              to="electrónica"
              id="electronicalink"
              onClick={handleLinkClick}
            >
              Electrónica
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hogar-navbar"
              to="hogar"
              id="hogarlink"
              onClick={handleLinkClick}
            >
              Hogar
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ortopedia-navbar"
              to="ortopedia"
              id="ortopedialink"
              onClick={handleLinkClick}
            >
              Ortopedia
            </NavLink>
          </li>
          </ul>
      </nav>
      <ul className="nav-icons">
        <li>
        <i
        id="search-right"
        className={`fas ${menuOpen ? 'fa-times' : 'fa-search'} icon ${searchIconRotated ? 'rotate-180' : ''}`}
        aria-label="Búsqueda"
        onClick={handleSearchClick}
      ></i>
        </li>
        <li>
          <CartComponent />
        </li>
        {user !== null ? (
          <Avatar />
        ) : (
          <>
            <li>
              <i
              id="login-icon-nav"
                className="fas fa-user icon"
                aria-label="Login/Register"
                onClick={handleLoginClick}
              ></i>
            </li>
          </>
        )}
      </ul>
      {loginModalOpen && <LoginMenu onCloseModal={handleCloseModal} />}
    </header>
  );
};

export default Header;
