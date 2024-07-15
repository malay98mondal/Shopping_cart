import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/config';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public status!: string;
  public phonenumber!: string; // Ensure this column is added
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phonenumber: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'users'
});

export default User;
