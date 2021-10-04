const Patient = require('./../../models/patient');

module.exports = {
    findAll: async () => {
        let items = await Patient.findAll();
       // await Patient.sync({ force: true });
        return items ? items.map(result => result.dataValues) : [];
    },

    add: async(data) => {
        try {
            const item = await Patient.create(data);
            console.log(item);
            return item.id;
        } catch (err) {
            return err;
        }
    }
}