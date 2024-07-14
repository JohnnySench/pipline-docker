import { instanceAuth } from "./instance";
import { ISignUp, IResponseSignUp, TResponseUndefined } from "./types";
import { errorPreparing } from "@shared/utils/errorPreparing.ts";

export const signUp = async (payload: ISignUp): TResponseUndefined<IResponseSignUp> => {
  try {
    const response = await instanceAuth
      .post(`accounts:signUp?key=${import.meta.env.VITE_API_KEY}`, {
        ...payload,
        returnSecureToken: true
      });
    return response.data;
  } catch (e: any) {
    throw errorPreparing(e);
  }
};