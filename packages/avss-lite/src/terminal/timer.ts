export class Timer {
  private startTime = Date.now();

  reset(): void {
    this.startTime = Date.now();
  }

  elapsed(): number {
    return Date.now() - this.startTime;
  }
}