import { useAppSelector } from '../../redux/hooks'
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = useAppSelector((state) => state.auth.token)
  if (!token) {
    return <Navigate to={"/"} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute