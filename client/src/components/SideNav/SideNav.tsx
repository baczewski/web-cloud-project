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
import { useStyles } from './SideNavStyles';


const SideNav = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
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
                <div className={classes.toolbar} />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <NotesIcon />
                        </ListItemIcon>
                        <ListItemText primary="Notes" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Assignemnts" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default SideNav;
