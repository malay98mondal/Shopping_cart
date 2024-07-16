import Sequelize  from 'sequelize';
import sequelize from '../config/config';
import {initializeProductModel} from './Product';
import { initializeCartModel } from './cart';
import { initializePaymentMethodModel } from './PaymentMethod';
import { initializeOrderModel } from './order';


const db: { [key: string]: any } = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;



// Initialize the models
db.Product =initializeProductModel(sequelize);
db.Cart = initializeCartModel(sequelize);

db.PaymentMethod = initializePaymentMethodModel(sequelize);
db.order =initializeOrderModel(sequelize);

// Synchronize models
db.syncModels = async (shouldSync: boolean) => {
  if (shouldSync) {
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
  } else {
    console.log('Model synchronization skipped.');
  }
};

export default db;

