const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const path = require('node:path')

// main app window
const createMainWindow = () => {
    const win = new BrowserWindow({
        width: 1600,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // TODO: посмотреть как вообще пафы ставить надо абсолют или релатив или path.join(__dirname, 'index.html')
    win.loadFile('./renderer/html/index.html')
}

// TODO: make a toggleable option to have minimised version in the timer window
// individual timer window
const createTimerWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 200,

        transparent: true, // TODO: make this look like a proper overlay
        frame: false,

        alwaysOnTop: true, // TODO: make this toggleable in settings
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.setMenu(null); // remove dropdown menu
    win.loadFile('./renderer/html/timer.html')
}

app.whenReady().then(() => {
    // chanel to create new timer window
    ipcMain.on('create-timer-window', createTimerWindow)
    createMainWindow()

    // channel to minimize timer window
    ipcMain.on('minimize-window', (event) => {
        const win = BrowserWindow.getFocusedWindow();
        win.minimize();
    });

    // channel to close timer window
    ipcMain.on('close-window', (event) => {
        const win = BrowserWindow.getFocusedWindow();
        win.close();
    });
})