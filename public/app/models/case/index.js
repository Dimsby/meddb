const {Sequelize, DataTypes} = require('sequelize');
const db = require('./../../');

module.exports = db.define('Vk', {
    // Model attributes are defined here
    caseNo: DataTypes.INTEGER,
    caseType: DataTypes.INTEGER,
    dateStart: DataTypes.DATEONLY,
    dateFinish: DataTypes.DATEONLY,
    dateLast: DataTypes.DATEONLY,
    dateBirth: DataTypes.DATEONLY,
    diagnosis: DataTypes.TEXT,
    diagnosisCode: DataTypes.INTEGER,
    comments: DataTypes.TEXT

}, {
    //   timestamps: false
});