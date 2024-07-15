import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/config';

class Product extends Model {
 //public id!: number;
  public name!: string;
  public price!: number;
  public description?: string;
}

Product.init({
  id: {
    type: DataTypes.INET,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: new DataTypes.STRING(256),
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'products',
});

export default Product;
