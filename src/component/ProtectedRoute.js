import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const role = Cookies.get("role");
  return role ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;