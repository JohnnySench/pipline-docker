export interface ISignUp {
  email: string,
  password: string,
}

export interface IResponseSignUp {
  email: string,
}

export type TResponseUndefined<T> = Promise<T | undefined>
