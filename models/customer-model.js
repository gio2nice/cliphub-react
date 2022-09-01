const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Customer extends Model {
    checkPassword(customerPw) {
        return bcrypt.compareSync(customerPw, this.password)
    };
}

Customer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        phone: {
            type: Number,
            require: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 20]
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (newCustomerData) => {
                newCustomerData.password = await bcrypt.hash(newCustomerData.password, 10);
                return newCustomerData;
            },
            beforeUpdate: async (updatedCustomerData) => {
                updatedCustomerData.password = await bcrypt.hash(updatedCustomerData.password, 10);
                return updatedCustomerData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'customer',
    }
)

module.exports = Customer;