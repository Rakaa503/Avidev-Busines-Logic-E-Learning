import type { EventMap } from "./events";

export type EventListener<K extends keyof EventMap> = (
  payload: EventMap[K]
) => void;