const Patient = require('./../../models/patient');
const {Sequelize, col, fn} = require('sequelize');

module.exports = {
    findAll: async () => {
        let items = await Patient.findAll();
        // await Patient.sync({ force: true });
        return items ? items.map(result => result.dataValues) : [];
    },

    autocomplete: async () => {
        let items = await Patient.findAll({
            order: [
                ['lastName', 'ASC'],
            ],
            attributes: ['id', [Sequelize.literal("lastName || ' ' || firstName || ' ' || surName  "), 'label']]
        });
        return items ? items.map(result => result.dataValues) : [];
    },

    add: async (data) => {
        try {
            const item = await Patient.create(data);
            console.log(item);
            return item.id;
        } catch (err) {
            return err;
        }
    }
}