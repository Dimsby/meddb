const {Sequelize} = require('sequelize');

const Case = require('./../../models/case');
const Patient = require('./../../models/patient');

module.exports = {
    findAll: async () => {
        let items = await Case.findAll({
            attributes: [
                'id',
                'caseNo',
                'caseType',
                'patientId',
                [Sequelize.literal("lastName || ' ' || firstName || ' ' || surName  "), 'patientName'],
                'dateStart',
                'dateLast',
                'dateFinish',
                'diagnosis',
                'diagnosisCode',
            ],
            include: [
                {
                    model: Patient, as: 'Patient',
                    required: false
                }
            ]
        });
        // await Case.sync({ force: true });
        return items ? items.map(result => result.dataValues) : [];
    },

    add: async (data) => {
        try {
            const item = await Case.create(data);
            return item.id;
        } catch (err) {
            return err;
        }
    },

    update: async (data) => {
        const {id, ...restData} = data

        try {
            await Case.update(restData, {where: {id: id}});
            return id
        } catch (err) {
            return err;
        }
    }
}
