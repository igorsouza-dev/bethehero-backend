import express from 'express';
import cors from 'cors';

const app = express();
app.get('/', (req, res) => res.send('hello world'));
app.use(express.json());
app.use(cors());

app.listen(3333);
