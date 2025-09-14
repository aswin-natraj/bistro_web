/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export class SimpleEventEmitter {
  private listeners: Record<string, Function[]> = {}

  on(event: string, callback: Function): void {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(callback)
  }

  emit(event: string, ...args: unknown[]): void {
    if (this.listeners[event]) {
      this.listeners[event].forEach((callback) => callback(...args))
    }
  }
}
