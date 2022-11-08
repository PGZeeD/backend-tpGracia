import 'dotenv/config';
import './database/connectdb.js';
import express from 'express';
import authRouter from './routes/auth.route.js';
const app = express();

app.use('/', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('🔥🔥🔥 http://localhost:' + PORT));

app.use();