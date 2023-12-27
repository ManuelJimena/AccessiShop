import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../API/API';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error al parsear los datos del usuario:', error);
      }
    }

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedToken && !storedUser) {
      getUserDetails();
    }
  }, []);

  const getUserDetails = async () => {
    try {
      const response = await API.get(`/users/${obtainUserIdFromToken(token)}`);
      setUser(response.data.userData);
      localStorage.setItem('user', JSON.stringify(response.data.userData));
    } catch (error) {
      console.error('Error al obtener detalles del usuario:', error);
    }
  };

  const login = async (username, password) => {
    try {
      const response = await API.post('/users/login', { username, password });
      if (response.data.error) {
        throw new Error(response.data.message);
      }
      const { token, ...userData } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      setToken(token);
      setUser(userData);
      return true;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  };

  const register = async (formData) => {
    try {
      const response = await API.post('/users/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.error) {
        throw new Error(response.data.message);
      }
      const { token, ...userDetails } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userDetails));
      setToken(token);
      setUser(userDetails);
      navigate('/perfil');
      return true;
    } catch (error) {
      console.error('Error al registrar:', error);
      throw error;
    }
  };

  const updateProfile = async (userId, updatedData) => {
    try {
      const response = await API.put(`/users/update/${userId}`, updatedData);
      const updatedUser = { ...user, ...updatedData };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Error al actualizar:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      if (user.isAdmin && userId !== user._id) {
        await API.delete(`/users/${userId}`);
      } else {
        console.error('Acción no permitida');
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout, register, updateProfile, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
