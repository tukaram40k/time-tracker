document.addEventListener("DOMContentLoaded", () => {
    const startTimerButton = document.getElementById("start-timer-button");

    startTimerButton.addEventListener("click", () => {
        window.electronAPI.createTimerWindow() // linter cant find electron api for some reason, ignore it
    })
})