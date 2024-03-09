import './Perfil.css';
import { useContext, useState } from 'react';
import { UserContext } from '@/context/userContext';
import { Link } from 'react-router-dom';
import DatosPerfil from '@components/DatosPerfil/DatosPerfil';

const Perfil = () => {
  const { user } = useContext(UserContext);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  if (!user) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <main>
      <div className="perfil-menu">
        <h2>{user.email}</h2>
        <h2>{user.username}</h2>
        <h3>
          Tipo de usuario: <span className={user.isAdmin ? "admin-text" : "normal-text"}>
            {user.isAdmin ? "Administrador" : "Normal"}
          </span>
        </h3>
        <div className='avatar-container'>
          <img className="avatar-img" src={user.avatar} alt={user.username} />
        </div>
        {user.isAdmin && (
          <Link to="/administrador">
            <button className='admin-panel'>Panel de Administrador</button>
          </Link>
        )}
        {!editMode ? (
          <div className="user-details">
            <p><span className='user-name-details'>Nombre:</span> {user.name}</p>
            <p><span>Teléfono:</span> {user.phone}</p>
            <p><span>País:</span> {user.country}</p>
            <p><span>Provincia:</span> {user.province}</p>
            <p><span>Localidad:</span> {user.locality}</p>
            <p><span>Dirección:</span> {user.address}</p>
            <p><span>Código Postal:</span> {user.postalCode}</p>
            <button className='edit-details' onClick={toggleEditMode}>Editar Datos</button>
          </div>
        ) : (
          <DatosPerfil user={user} />
        )}
      </div>
    </main>
  );
};

export default Perfil;
