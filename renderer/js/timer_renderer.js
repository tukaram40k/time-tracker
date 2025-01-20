// timer
class Timer {
    constructor () {
        this.isRunning = false;
        this.startTime = 0;
        this.totalTime = 0;
    }

    _getTimeSinceLastStart () {
        if (!this.startTime) {
            return 0;
        }
        return Date.now() - this.startTime;
    }

    start () {
        if (this.isRunning) {
            return console.error('Timer is already running');
        }
        this.isRunning = true;
        this.startTime = Date.now();
    }

    stop () {
        if (!this.isRunning) {
            return console.error('Timer is already stopped');
        }
        this.isRunning = false;
        this.totalTime += this._getTimeSinceLastStart();
    }

    reset () {
        // this.totalTime = 0;
        // if (this.isRunning) {
        //     this.startTime = Date.now();
        //     return;
        // }
        // this.startTime = 0;
        this.isRunning = false;
        this.startTime = 0;
        this.totalTime = 0;
    }

    getTime () {
        if (!this.startTime) {
            return 0;
        }
        if (this.isRunning) {
            return this.totalTime + this._getTimeSinceLastStart();
        }
        return this.totalTime;
    }
}

// event listeners
document.addEventListener("DOMContentLoaded", () => {
    const startTimerButton = document.getElementById("timer-start-button");
    const stopTimerButton = document.getElementById("timer-stop-button");
    const resetTimerButton = document.getElementById("timer-reset-button");
    const timerClock = document.getElementById("timer-clock");

    const timer = new Timer();

    // display current time
    startTimerButton.addEventListener("click", () => {
        timer.start();
        setInterval(() => {
            const currentTime = timer.getTime();
            const timeInMillis = Math.floor(currentTime % 1000 / 10);
            const timeInSeconds = Math.floor((currentTime / 1000) % 60);
            const timeInMinutes = Math.floor((currentTime / 60000) % 60);
            const timeInHours = Math.floor((currentTime / 3600000) % 24);

            timerClock.innerText = `${timeInHours}:${timeInMinutes}:${timeInSeconds}:${timeInMillis}`;
        }, 25);
    })

    stopTimerButton.addEventListener("click", () => {
        timer.stop();
    })

    resetTimerButton.addEventListener("click", () => {
        timer.reset();
    })
})