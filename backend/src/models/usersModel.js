const Sequelize = require('sequelize');
const connection = require('../infra/connectionSequelize');

const User = connection.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    create_time: Sequelize.DATE,
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: Sequelize.STRING,
    setor: Sequelize.STRING,
    cargo: Sequelize.STRING,
    posicao: Sequelize.STRING,
    imagem: Sequelize.STRING,
})

module.exports = User;