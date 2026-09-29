import type { EventMap, EventName } from "./events";
import type { EventListener } from "./listener";

export class EventEmitter {
  private listeners = new Map<
    EventName,
    Array<(payload: unknown) => void>
  >();

  on<K extends EventName>(
    event: K,
    listener: EventListener<K>
  ): void {
    const current =
      this.listeners.get(event) ?? [];

    current.push(listener as (payload: unknown) => void);

    this.listeners.set(event, current);
  }

  off<K extends EventName>(
    event: K,
    listener: EventListener<K>
  ): void {
    const current = this.listeners.get(event);

    if (!current) return;

    this.listeners.set(
      event,
      current.filter(
        (l) => l !== (listener as (payload: unknown) => void)
      )
    );
  }

  emit<K extends EventName>(
    event: K,
    payload: EventMap[K]
  ): void {
    const current = this.listeners.get(event);

    if (!current) return;

    current.forEach((listener) => {
      listener(payload);
    });
  }

  clear(): void {
    this.listeners.clear();
  }

  listenerCount(event: EventName): number {
    return this.listeners.get(event)?.length ?? 0;
  }
}

export const events = new EventEmitter();