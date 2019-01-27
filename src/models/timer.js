var Timer = /** @class */ (function () {
    function Timer() {
        this.minutes = 0;
        this.secondes = 0;
        this.totalSecondes = 0;
    }
    Timer.prototype.start = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.minutes = Math.floor(++_this.totalSecondes / 60);
            _this.secondes = _this.totalSecondes - _this.minutes * 60;
        }, 1000);
    };
    Timer.prototype.stop = function () {
        clearInterval(this.timer);
    };
    Timer.prototype.reset = function () {
        this.totalSecondes = this.minutes = this.secondes = 0;
    };
    return Timer;
}());
export { Timer };
//# sourceMappingURL=timer.js.map