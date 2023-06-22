import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from '@mui/icons-material/Notes';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { makeStyles } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../context/AppContext';

const useStyles = makeStyles(() => ({
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240,
        marginTop: 60
    },
    navHeader: {
        height: 60
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    navbarWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logout: {
        cursor: 'pointer',
        border: '1px solid black',
        padding: '0.5rem',
        '&:hover': {
            backgroundColor: '#00008B',
        },
    }
}));

const SideNav = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const context = useContext(GlobalContext);

    return (
        <>
            <AppBar position="fixed" className={classes.navHeader}>
                <Toolbar className={classes.navbarWrapper}>
                    <Typography variant="h6" noWrap>
                        My App
                    </Typography>
                    <div
                        className={classes.logout}
                        onClick={() => {
                            localStorage.clear();
                            context.updateGlobalState({ jwt: '' });
                            navigate('/login');
                        }}
                    >Logout</div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <List>
                    <Link to='/notes' className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <NotesIcon />
                            </ListItemIcon>
                            <ListItemText primary="Notes" />
                        </ListItem>
                    </Link>
                    <Link to='/assignments' className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <AssignmentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Assignments" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </>
    );
};

export default SideNav;
