import express from 'express';
//import bodyParser from 'body-parser';
import cors from 'cors';
//import productRoutes from './routes/productRoutes';
import productRoutes from './routes/productRoutes'
import userRoutes from './routes/userRoutes'; // Ensure this is correctly imported
import sequelize from './config/config'; // Ensure the correct path
//import LoginHistory from './models/loginHistory';
import LoginHistoryRoutes from './routes/loginHistoryRoutes';
//import User from './models/User';

const app = express();
const PORT = process.env.PORT || 8000;

// Use the cors middleware
// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this based on your frontend's URL
  optionsSuccessStatus: 200,
}));

app.use(express.json());
app.use('/loginHistory',LoginHistoryRoutes);

app.use('user', userRoutes);
app.use('/product', productRoutes);
//app.use('/users', userRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


// import express from 'express';
// import cors from 'cors';
// import productRoutes from './routes/productRoutes';
// import userRoutes from './routes/userRoutes';
// import sequelize from './config/config';

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Use CORS middleware
// app.use(cors({
//   origin: 'http://localhost:3000', // Adjust this based on your frontend's URL
//   optionsSuccessStatus: 200,
// }));

// app.use(express.json());
// app.use('/product', productRoutes);
// app.use('/users', userRoutes);

// sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// });

