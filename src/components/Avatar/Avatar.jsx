import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import LogOut from "../LogOut/LogOut";
import "./Avatar.css";

const Avatar = () => {
    const { user } = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleProfileClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="avatar-user" onClick={handleMenuClick}>
                <img src={user.avatar} alt={user.username} />
            </div>
            <div className='avatar-menu'>
                {isMenuOpen && (
                    <div className="menu-container">
                        <ul>
                            <li className="menu-option-usuario">
                                <h2>Menú de usuario</h2>
                            </li>
                            <li className="menu-option-perfil">
                                <Link to="/perfil" onClick={handleProfileClick}>
                                    <i className="fas fa-user icon" aria-label="Login/Register"></i>
                                    <span>Ir al perfil</span>
                                </Link>
                            </li>
                            <li className="menu-option-favoritos">
                            <Link to="/favoritos" onClick={handleProfileClick}>
                                <i className="fa-solid fa-heart"></i><span>Favoritos</span></Link></li>
                            <li className="menu-option-salir"><LogOut /><span>Cerrar sesión</span></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Avatar;
