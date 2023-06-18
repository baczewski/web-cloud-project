import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';

export default function PrivateRoute() {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}