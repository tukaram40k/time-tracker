const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    createTimerWindow: () => ipcRenderer.send('create-timer-window')
})