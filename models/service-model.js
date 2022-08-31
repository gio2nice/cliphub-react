const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Service extends Model { }

Service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        service_name: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
        },
        time_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
);

module.exports = Service;