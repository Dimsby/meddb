const Patient = require('./../models/patient');
const Case = require('./../models/case');

Case.belongsTo(Patient, {as: 'Patient'})
Patient.hasMany(Case);
