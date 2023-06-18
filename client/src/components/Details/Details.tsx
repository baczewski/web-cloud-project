import { Container, InputLabel } from '@material-ui/core';
import { Type } from '../../utils/Type';

interface DetailsProps {
    type: Type,
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