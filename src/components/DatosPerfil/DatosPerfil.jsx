import { useState, useContext } from 'react';
import { UserContext } from '@/context/userContext';
import { API } from '../../API/API';
import Swal from 'sweetalert2';
import './DatosPerfil.css';

const DatosPerfil = () => {
    const { user, setUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        name: user.name || '',
        phone: user.phone || '',
        country: user.country || '',
        province: user.province || '',
        locality: user.locality || '',
        address: user.address || '',
        postalCode: user.postalCode || ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.put('/users/update/' + user._id, formData);
            if (response.status === 200) {
                const updatedUserData = { ...user, ...formData };
                setUser(updatedUserData);
                localStorage.setItem('user', JSON.stringify(updatedUserData));
                Swal.fire('¡Éxito!', 'Datos actualizados con éxito.', 'success');
            } else {
                Swal.fire('Error', 'Error al actualizar los datos.', 'error');
            }
        } catch (error) {
            console.error('Error al actualizar los datos:', error);
            Swal.fire('Error', 'Error al actualizar los datos.', 'error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='datos-perfil-form'>
            <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Nombre' />
            <input type='number' name='phone' value={formData.phone} onChange={handleChange} placeholder='Teléfono' />
            <select name='country' value={formData.country} onChange={handleChange}>
                <option value='Alemania'>Alemania</option>
                <option value='Argentina'>Argentina</option>
                <option value='Arabia Saudita'>Arabia Saudita</option>
                <option value='Australia'>Australia</option>
                <option value='Bélgica'>Bélgica</option>
                <option value='Brasil'>Brasil</option>
                <option value='Canadá'>Canadá</option>
                <option value='Chile'>Chile</option>
                <option value='China'>China</option>
                <option value='Colombia'>Colombia</option>
                <option value='Corea del Sur'>Corea del Sur</option>
                <option value='Emiratos Árabes Unidos'>Emiratos Árabes Unidos</option>
                <option value='España'>España</option>
                <option value='Estados Unidos'>Estados Unidos</option>
                <option value='Francia'>Francia</option>
                <option value='Holanda'>Holanda</option>
                <option value='India'>India</option>
                <option value='Indonesia'>Indonesia</option>
                <option value='Israel'>Israel</option>
                <option value='Italia'>Italia</option>
                <option value='Japón'>Japón</option>
                <option value='México'>México</option>
                <option value='Nigeria'>Nigeria</option>
                <option value='Noruega'>Noruega</option>
                <option value='Polonia'>Polonia</option>
                <option value='Reino Unido'>Reino Unido</option>
                <option value='Rusia'>Rusia</option>
                <option value='Singapur'>Singapur</option>
                <option value='Sudáfrica'>Sudáfrica</option>
                <option value='Suiza'>Suiza</option>
                <option value='Suecia'>Suecia</option>
                <option value='Turquía'>Turquía</option>
            </select>
            <input type='text' name='province' value={formData.province} onChange={handleChange} placeholder='Provincia' />
            <input type='text' name='locality' value={formData.locality} onChange={handleChange} placeholder='Localidad' />
            <input type='text' name='address' value={formData.address} onChange={handleChange} placeholder='Dirección' />
            <input type='number' name='postalCode' value={formData.postalCode} onChange={handleChange} placeholder='Código Postal' />
            <button type='submit'>Actualizar Datos</button>
        </form>
    );
};

export default DatosPerfil;
