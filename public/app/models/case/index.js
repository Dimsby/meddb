const {Sequelize, DataTypes} = require('sequelize');
const db = require('./../../');

const Case = db.define('Case', {
    // Model attributes are defined here
    caseNo: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER,
    caseType: DataTypes.TEXT,
    dateStart: DataTypes.DATEONLY,
    dateFinish: DataTypes.DATEONLY,
    dateLast: DataTypes.DATEONLY,
    diagnosis: DataTypes.TEXT,
    diagnosisCode: DataTypes.INTEGER,
    comments: DataTypes.TEXT

}, {
    //   timestamps: false
})

module.exports = Case