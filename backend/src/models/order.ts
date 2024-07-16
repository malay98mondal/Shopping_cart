import { DataTypes, Model, Sequelize } from 'sequelize';

class Order extends Model {
    public id!: number;
    public userId!: number;
    public totalPrice!: number;
    public status!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export const initializeOrderModel = (sequelize: Sequelize) => {
    Order.init(
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
            totalPrice: {
                type: DataTypes.FLOAT, // Adjust data type based on your requirements
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 'pending', // Default status
            },
            // Define other attributes here
        },
        {
            sequelize,
            modelName: 'Order',
        }
    );
    return Order;
};


