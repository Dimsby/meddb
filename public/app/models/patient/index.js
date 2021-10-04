const {Sequelize, DataTypes} = require('sequelize');
const db = require('./../../');

module.exports = db.define('Patient', {
    // Model attributes are defined here
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    surName: DataTypes.STRING,
    dateBirth: DataTypes.DATEONLY,
    adrReg: DataTypes.TEXT,
    adrPhys: DataTypes.TEXT,
    phone: DataTypes.INTEGER,
    jobPlace: DataTypes.TEXT,
    jobPos: DataTypes.TEXT,
    gender: DataTypes.BOOLEAN

}, {
 //   timestamps: false
});