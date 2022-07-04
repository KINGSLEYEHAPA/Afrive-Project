import { Navigate, useLocation } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
  const location = useLocation();
  if (!isLoggedIn) {
    return <Navigate to="/api/v1/auth" replace state={{ from: location }} />;
  }
  return children;
};
export default Protected;
