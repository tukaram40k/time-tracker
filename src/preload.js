const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    // channel to create new timer window
    createTimerWindow: () => ipcRenderer.send('create-timer-window'),

    // channels for timer control buttons
    minimizeWindow: () => ipcRenderer.send('minimize-window'),
    closeWindow: () => ipcRenderer.send('close-window')
})
