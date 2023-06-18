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
import { Link } from 'react-router-dom';

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
    }
}));

const SideNav = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.navHeader}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        My App
                    </Typography>
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
