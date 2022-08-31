const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Portfolio extends Model {}

Portfolio.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        barber_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'portfolio',
                key: 'id',
                unique: false
            }
        }
    }
)

module.exports = Portfolio;