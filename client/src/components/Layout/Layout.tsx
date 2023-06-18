import { Outlet } from "react-router-dom";
import SideNav from '../SideNav/SideNav';
import { useStyles } from './LayoutStyles'

const Layout = () => {
    const classes = useStyles();

    return (
        <>
            <SideNav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Outlet />
            </main>
        </>
    );
};

export default Layout;