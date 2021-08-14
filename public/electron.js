const {app, BrowserWindow} = require('electron')
const isDev = require('electron-is-dev'); // To check if electron is in development mode
const path = require('path');

const {ipcMain} = require('electron')


const createWindow = () => {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: isDev
                ? path.join(app.getAppPath(), './public/preload.js') // Loading it from the public folder for dev
                : path.join(app.getAppPath(), './build/preload.js'),
            contextIsolation: true,
        }
    })

    win.removeMenu()

    // load the index.html from a url
    win.loadURL(isDev
        ? 'http://localhost:3000' // Loading localhost if dev mode
        : `file://${path.join(__dirname, '../build/index.html')}` // Loading build file if in production)
    );

    // Open the DevTools.
    if (isDev) {
        win.webContents.on('did-frame-finish-load', () => {
            win.webContents.openDevTools({mode: 'detach'});
        });
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.

    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})


ipcMain.on("toMain", (event, args) => {
    console.log(args);
    event.reply("fromMain", 'data from main');
});

ipcMain.handle("patient/findAll", async (event, args) => {
    const Patient = require('./db/models/patient');
    return await Patient.findAll();
});