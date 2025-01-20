// event listeners
document.addEventListener("DOMContentLoaded", () => {
    const createTimerButton = document.getElementById("create-timer-button");

    // open timer window
    createTimerButton.addEventListener("click", () => {
        window.electronAPI.createTimerWindow() // linter cant find electron api, ignore it

        const timer = new Timer();
    })

    // main section tabs
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and content
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to the clicked tab and its content
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
})