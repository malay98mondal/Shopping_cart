import { DataTypes, Model, Sequelize } from 'sequelize';

class PaymentMethod extends Model {
  public id!: number;
  public userId!: number;
  public methodType!: string;
  public details!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initializePaymentMethodModel = (sequelize: Sequelize) => {
  PaymentMethod.init(
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
      methodType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      details: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'PaymentMethod',
    }
  );
  return PaymentMethod;
};
