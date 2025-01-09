// event listeners
document.addEventListener("DOMContentLoaded", () => {
    const createTimerButton = document.getElementById("create-timer-button");

    // open timer window
    createTimerButton.addEventListener("click", () => {
        window.electronAPI.createTimerWindow() // linter cant find electron api, ignore it

        const timer = new Timer();
    })
})