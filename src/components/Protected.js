import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const Protected = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  if (!user) {
    return <Navigate to="/api/v1/auth" replace />;
  }
  return children;
};
export default Protected;
