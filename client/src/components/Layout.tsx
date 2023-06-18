import { Outlet } from "react-router-dom";
import SideNav from './SideNav/SideNav';

const Layout = () => {
    return (
        <>
            <SideNav />
            <Outlet />
        </>
    );
};

export default Layout;