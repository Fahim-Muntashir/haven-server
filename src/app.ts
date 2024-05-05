import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import httpStatus from 'http-status';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import router from './app/Routes/Router';

const app: Application = express();


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send({
      Message:"Ph Healthcare Server"
  })  
})

app.use('/api/v1', router);

app.use((req: Request, res: Response, next: NextFunction)=> {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Api Not Found',
    error: {
      path: req.originalUrl,
      message:"Your Url Not Found"
    }
  })
})

app.use(globalErrorHandler);



export default app;