export type SetParamType<T> = (
  partial: T | Partial<T> | ((state: T) => T | Partial<T>),
  replace?: boolean,
) => void

export type GetParamType<T> = () => T

export interface ISelectOptions {
  label: string
  value: string
}
