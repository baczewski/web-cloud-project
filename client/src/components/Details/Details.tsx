import { Container, InputLabel } from '@material-ui/core';

interface DetailsProps {
    title: string
}

const Details = (props?: DetailsProps) => {

    return (
        <>
            <Container>
                <InputLabel>
                    Title
                </InputLabel>
            </Container>
        </>
    );
}

export default Details;