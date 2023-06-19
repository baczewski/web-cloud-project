import { Navigate, Outlet } from 'react-router-dom';
import { useCurrentUser } from '../../context/AppContext';

export default function PublicRoute() {
    const user = useCurrentUser();

    return user ? <Navigate to="/notes" /> : <Outlet />
}