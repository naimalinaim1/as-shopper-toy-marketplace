import { useContext } from "react";
import { AuthContent } from "../system/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContent);
  if (loading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <p className="text-blue-500">Loading...</p>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRouter;
