// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';

// dotenv.config();

// const sequelize = new Sequelize(
//   process.env.DB_DATABASE as string,
//   process.env.DB_USERNAME as string,
//   process.env.DB_PASSWORD as string,
//   {
//     host: process.env.DB_HOST,
//     port: Number(process.env.DB_PORT),
//     dialect: 'postgres',
//     dialectOptions: {
//       ssl: {
//         require: true, // This will help you use SSL
//         rejectUnauthorized: false // This is for self-signed certificates
//       }
//     }
//   }
// );

// export default sequelize;


import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize a new Sequelize instance
const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres', // Specify that we're using PostgreSQL as the database
  protocol: 'postgres',
  logging: false, // Disable logging; default: console.log
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // This is used to avoid "self-signed certificate" errors
    },
  },
});

// Export the sequelize instance for use in other parts of the application
export default sequelize;
