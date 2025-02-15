import express from 'express';
import cors from 'cors'; // to allow cross origin requests
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoute from './routes/users.js';
import doctorRoute from './routes/doctors.js';
import medicineRoute from './routes/medicine.js'
import reviewRoute from './routes/reviews.js'
import subscribeRoute  from './routes/subscribe.js'
import adminRoute from './routes/admin.js'

const app = express();

// set up cors to allow us to accept requests from our client (origin , credentials)
app.use(cors({
}));


// middlewares
app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ extended: true, limit: '16mb' }));
app.use(express.static('public'));
app.use(cookieParser());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoute);
app.use('/api/doctors', doctorRoute);
app.use('/api/medicines', medicineRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/subscribe', subscribeRoute);
app.use('/api/admin', adminRoute);






export { app };