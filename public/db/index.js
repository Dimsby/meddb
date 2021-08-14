const { Sequelize } = require('sequelize');
const isDev = require('electron-is-dev');
const path = require('path');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: isDev
        ? path.join(__dirname, '../../base.db') // my root folder if in dev mode
        : path.join(process.resourcesPath, 'base.db')
});

module.exports = db;
