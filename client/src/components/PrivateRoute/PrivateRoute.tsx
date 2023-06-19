import { Navigate, Outlet } from 'react-router-dom';
import { useCurrentUser } from '../../context/AppContext';

export default function PrivateRoute() {
    const user = useCurrentUser();
    console.log(user);

    return user ? <Outlet /> : <Navigate to="/login" />
}