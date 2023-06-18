import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    bottonIcon: {
        marginRight: 5
    },
    buttonWrapper: {
        position: 'fixed',
        bottom: 30,
        right: 30
    },
    notesWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        flexWrap: 'wrap'
    }
}));