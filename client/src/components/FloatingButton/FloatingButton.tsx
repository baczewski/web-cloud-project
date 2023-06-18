import { Fab, Typography } from '@material-ui/core'
import { useStyles } from './FloatingButtonStyles'
import { FloatingButtonProps } from './FloatingButtonProps';

const FloatingButton = (props: FloatingButtonProps) => {
    const classes = useStyles();

    return (
        <Fab
            variant="extended"
            color="primary"
            className={classes.buttonWrapper}
            onClick={() => props.changeEvent(true)}
        >
            {props.icon}
            <Typography className={classes.textWrapper}>
                {props.text}
            </Typography>
        </Fab>
    );
}

export default FloatingButton;