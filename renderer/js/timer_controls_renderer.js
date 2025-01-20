document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('minimize').addEventListener('click', () => {
        window.electronAPI.minimizeWindow();
    });

    document.getElementById('close').addEventListener('click', () => {
        window.electronAPI.closeWindow();
    });
});