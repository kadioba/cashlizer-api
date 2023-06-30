import express, { Request, Response, json } from 'express';
import dotenv from 'dotenv';
import db from '@/database/databse.connection';
import router from '@/routers/index.router';

const app = express();

dotenv.config()

app.use(json());
app.use(router)

app.get('/health', (req: Request, res: Response) => {
    res.send('OK');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));