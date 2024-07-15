import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/config'; // Adjust the path if necessary

class LoginHistory extends Model {
  public id!: number;
  public userId!: number;
  public loginTime!: Date;
  public logoutTime!: Date;
  public ipAddress!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

LoginHistory.init(
  {
    id: {
      type: DataTypes.INET,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INET,
      allowNull: false,
    },
    loginTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    logoutTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ipAddress: {
      type: new DataTypes.STRING(45), // IPv6 compatible
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'login_histories',
    timestamps: true,
  }
);

export default LoginHistory;
