import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: "http://localhost:5173"
}));

import authRoutes from './routes/authRoutes'

// Routes
app.use('/auth', authRoutes);

app.listen(process.env.PORT || 3000,() => {
  console.log('listening to port 3000')
})