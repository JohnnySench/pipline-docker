import { instanceAuth } from "./instance";
import { ISignUp, IResponseSignUp, TResponseUndefined } from "./types";

export const signUp = async (payload: ISignUp): TResponseUndefined<IResponseSignUp> => {
  try {
    const response = await instanceAuth
      .post(`accounts:signUp?key=${import.meta.env.VITE_API_KEY}`, {
        ...payload,
        returnSecureToken: true
      });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};