import cookieParser from 'cookie-parser';
import express, { Application } from 'express';
import cors from 'cors';
import router from './app/routes';
import notFound from './app/middlewares/notFound';

const app: Application = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors());
app.get('/', (req, res) => {
  const a = 'maudf';
  res.send(a);
});

/* app.use(cors({ origin: 'http://localhost:5173', credentials: true })); */

// application routes
//app.use('/api/v1', router);

//Not Found
app.use(notFound);

export default app;
