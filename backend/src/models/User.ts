import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/config';

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
}

User.init({
  id: {
    type: DataTypes.INET,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  password: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'users',
});

export default User;
