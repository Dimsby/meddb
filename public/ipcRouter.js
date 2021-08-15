const {ipcMain} = require('electron')

const parseChannel = (channel) => {
    let items = channel.split('/');
    return (items[0] && items[1])
            ? [items[0], items[1]]
            : false
}

export default function ipcRouter() {
    let channel = '';

    ipcMain.handle(channel, async (event, args) => {
        if (channel) return true;
        const Patient = require('./db/models/patient');
        return await Patient.findAll();
    });
}