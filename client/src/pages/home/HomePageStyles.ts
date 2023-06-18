import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    bottonIcon: {
        marginRight: 5
    },
    buttonWrapper: {
        position: 'fixed',
        bottom: 30,
        right: 30
    },
    notesWrapper: {
        display: 'flex !important',
        flexDirection: 'row',
        gap: 15,
        flexWrap: 'wrap'
    }
}));