const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active'
    }
}, {
    tableName: 'users'
});

module.exports = User;
