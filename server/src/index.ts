import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', (req: Request, res: Response) => {
    return res.json({ message: 'It is working :)' });
});

app.listen(8080, () => console.log('Listening on port 8080.'));