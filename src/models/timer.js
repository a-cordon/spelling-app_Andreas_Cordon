var Timer = /** @class */ (function () {
    function Timer() {
        this.minutes = 0;
        this.seconds = 0;
        this.totalSeconds = 0;
    }
    /**
     * Starts the timer
     */
    Timer.prototype.start = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.minutes = Math.floor(++_this.totalSeconds / 60);
            _this.seconds = _this.totalSeconds - _this.minutes * 60;
        }, 1000);
    };
    /**
     * Stops the timer
     */
    Timer.prototype.stop = function () {
        clearInterval(this.timer);
    };
    /**
     * Resets the timer
     */
    Timer.prototype.reset = function () {
        this.totalSeconds = this.minutes = this.seconds = 0;
    };
    return Timer;
}());
export { Timer };
//# sourceMappingURL=timer.js.map