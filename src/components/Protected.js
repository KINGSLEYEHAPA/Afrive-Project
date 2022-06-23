import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/api/v1/auth" replace />;
  }
  return children;
};
export default Protected;
