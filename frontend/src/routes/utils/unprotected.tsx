import { useAppSelector } from '../../redux/hooks'
import { Navigate, Outlet } from "react-router-dom";

const UnprotectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = useAppSelector((state) => state.auth.token)
  if (token) {
    return <Navigate to={"/bills"} replace />;
  }

  return children ? children : <Outlet />;
};

export default UnprotectedRoute