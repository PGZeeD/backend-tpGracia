import 'dotenv/config';
import './database/connectdb.js';
import express from 'express';
import Router from './routes/Persona.route.js';

const app = express();
app.use(express.json());

app.use('/api/v1/', Router);

app.use('*', (_, res) => {
  res.status(404).send('<h1>OPS! the endpoint does not exist :(</h1>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('🔥🔥🔥 http://localhost:' + PORT));
