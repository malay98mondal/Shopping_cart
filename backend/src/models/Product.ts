// import { DataTypes, Model } from 'sequelize';
// import sequelize from '../config/config';

// class Product extends Model {
//  //public id!: number;
//   public name!: string;
//   public price!: number;
//   public description?: string;
// }

// Product.init({
//   id: {
//     type: DataTypes.INET,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: new DataTypes.STRING(128),
//     allowNull: false,
//   },
//   price: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   description: {
//     type: new DataTypes.STRING(256),
//     allowNull: true,
//   },
// }, {
//   sequelize,
//   tableName: 'products',
// });

// export default Product;


import { DataTypes, Model, Sequelize } from 'sequelize';


class Product extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
  public store_name!: string;
  public brand_name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

  //export default (sequelize: Sequelize) => {
  export const initializeProductModel = (sequelize: Sequelize) => {
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // store_name: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      // brand_name: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      timestamps: true,
      
    }
  );
  return Product;
};
