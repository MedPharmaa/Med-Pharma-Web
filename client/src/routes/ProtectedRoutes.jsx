import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext.jsx";
import PropTypes from 'prop-types';

const ProtectedRoutes = ({ children, allowedRoles }) => {
  const { token, role } = useContext(AuthContext);
  const isAllowed = allowedRoles.includes(role);

  const accessibleRoute = token && isAllowed ? children : <Navigate to="/sign-In" replace={true} />;

  return accessibleRoute;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProtectedRoutes