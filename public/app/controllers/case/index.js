const Case = require('./../../models/case');

module.exports = {
    findAll: async () => {
        let items = await Case.findAll();
       // await Case.sync({ force: true });
        return items ? items.map(result => result.dataValues) : [];
    },

    add: async(data) => {
        try {
            const item = await Case.create(data);
            return item.id;
        } catch (err) {
            return err;
        }
    }
}