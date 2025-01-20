const { contextBridge, ipcRenderer } = require('electron')

// create new timer window
contextBridge.exposeInMainWorld('electronAPI', {
    createTimerWindow: () => ipcRenderer.send('create-timer-window'),
    minimizeWindow: () => ipcRenderer.send('minimize-window'),
    closeWindow: () => ipcRenderer.send('close-window')
})

// timer control buttons
