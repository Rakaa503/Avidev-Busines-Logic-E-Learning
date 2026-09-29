const timers = new Map<string, number>();

export function startTimer(name: string): void {
  timers.set(name, Date.now());
}

export function endTimer(name: string): void {

  const start = timers.get(name);

  if (!start) {
    console.log(`Timer "${name}" not found.`);
    return;
  }

  const duration = Date.now() - start;

  console.log(`⏱ ${name} finished in ${duration} ms`);

  timers.delete(name);

}