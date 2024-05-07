import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import wordsRoutes from './routes/words';
import sentencesRoutes from './routes/sentences';
import categoriesRoutes from './routes/categories';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/words', wordsRoutes);
app.use('/sentences', sentencesRoutes);
app.use('/categories', categoriesRoutes);

app.get('/', (req, res) => {
  res.send('Hello to JobStack Staging API!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`MongoDB :: server running on port: ${PORT}`);
});
