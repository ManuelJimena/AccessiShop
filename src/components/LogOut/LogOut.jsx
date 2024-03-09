import { useContext } from 'react';
import { UserContext } from '@/context/userContext';
import './LogOut.css';

const LogOut = () => {
    const { logout } = useContext(UserContext);

    return (
        <button className="logout-btn" onClick={logout}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
    );
};

export default LogOut;
