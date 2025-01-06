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
    win.loadFile('./public/html/index.html')
}

// individual timer window
const createTimerWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.setMenu(null);
    win.loadFile('./public/html/timer.html')
}

app.whenReady().then(() => {
    ipcMain.on('create-timer-window', createTimerWindow)
    createMainWindow()
})