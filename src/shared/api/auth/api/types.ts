export interface ISignUp {
  email: string,
  password: string,
}

export interface IResponseSignUp {
  email: string,
  idToken: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  kind: string,
}

export type TResponseUndefined<T> = Promise<T | undefined>
