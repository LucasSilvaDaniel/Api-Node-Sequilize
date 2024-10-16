const { DataTypes } = require('sequelize');
const sequelize = require('../bancoDeDados');

const Vaga = sequelize.define('Vaga', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salario: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
});

module.exports = Vaga;
