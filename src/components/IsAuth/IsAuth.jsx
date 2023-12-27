import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const IsAuth = ({ children, adminRequired = false }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminRequired && !user.isAdmin) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default IsAuth;
