import { create, type StoreApi, type UseBoundStore } from 'zustand'

import type { GetParamType, SetParamType } from '../types'

export abstract class BaseStore<T extends object> {
  protected set!: SetParamType<T>
  protected get!: GetParamType<T>
  protected store: UseBoundStore<StoreApi<T>>

  constructor(initialState: T) {
    this.store = create<T>((set, get) => {
      this.set = set as unknown as SetParamType<T>
      this.get = get

      return initialState
    })
  }

  // Helper method to get the raw store (useful for hooks)
  get useStore() {
    return this.store
  }

  get state() {
    return this.get()
  }
}
