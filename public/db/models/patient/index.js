const Patient = require('./model');

module.exports = {
    findAll: async () => {
        let items = await Patient.findAll();
        return items ? items.map(result => result.dataValues) : [];
    }
}