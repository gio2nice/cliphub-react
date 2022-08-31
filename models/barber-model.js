const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Barber extends Model { 
    checkPassword(barberPw) {
        return bcrypt.compareSync(barberPw, this.password)
    };
}

Barber.init(
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
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
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
            beforeCreate: async (newBarberData) => {
                newBarberData.password = await bcrypt.hash(newBarberData.password, 10);
                return newBarberData;
            },
            beforeUpdate: async (updatedBarberData) => {
                updatedBarberData.password = await bcrypt.hash(updatedBarberData.password, 10);
                return updatedBarberData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'barber'
    }
);

module.exports = Barber;