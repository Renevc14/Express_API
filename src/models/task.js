const { DataTypes } = require('sequelize');
const sequelize = require('../database/config'); // Importamos sequelize correctamente

const Task = sequelize.define('Task', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    }
}, {
    tableName: 'tasks'
});

module.exports = Task;
