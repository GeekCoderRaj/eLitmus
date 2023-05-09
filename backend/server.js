import express from 'express';
import { APP_PORT } from './config';
import errorHandler from './middlewares/errorHandler';
import connectDB from './config/db';
import cors from "cors"
const app = express();
app.use(cors());
connectDB();
import routes from "./routes";
app.use(express.json());
app.use('/api',routes);
app.use(errorHandler);

app.listen(APP_PORT,()=>{
    console.log(`Port Running at ${APP_PORT}`);
})
