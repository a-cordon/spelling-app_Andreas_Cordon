export class Timer {

  public minutes: number = 0;
  public seconds: number = 0;
  private totalSeconds: number = 0;
  private timer;

  /**
   * Starts the timer
   */
  start() {
    this.timer = setInterval(() => {
      this.minutes = Math.floor(++this.totalSeconds / 60);
      this.seconds = this.totalSeconds - this.minutes * 60;
    }, 1000);
  }

  /**
   * Stops the timer
   */
  stop() {
    clearInterval(this.timer);
  }

  /**
   * Resets the timer
   */
  reset() {
    this.totalSeconds = this.minutes = this.seconds = 0;
  }
}
