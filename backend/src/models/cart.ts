import { DataTypes, Model, Sequelize } from 'sequelize';

class Cart extends Model {
  public id!: number;
  public userId!: number;
  public productId!: number;
  public quantity!: number;
  public product_name!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initializeCartModel = (sequelize: Sequelize) => {
  //export default (sequelize: Sequelize) => {
  Cart.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_name: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  );
   return Cart;
};

//export default Cart;
