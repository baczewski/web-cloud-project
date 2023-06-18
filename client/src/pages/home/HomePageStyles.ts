import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    notesWrapper: {
        display: 'flex !important',
        flexDirection: 'row',
        gap: 15,
        flexWrap: 'wrap'
    }
}));