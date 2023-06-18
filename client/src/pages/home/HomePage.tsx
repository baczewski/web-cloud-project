import { Note } from '../../components/Note/Note';
import { useStyles } from './HomePageStyles';

const HomePage = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Note />
        </main>
    );
};

export default HomePage;
