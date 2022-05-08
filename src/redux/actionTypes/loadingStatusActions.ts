import { Action } from "redux";

export const setIsLoading = (): Action => ({
  type: "LOADING",
});

export const setHasLoaded = (): Action => {
  return { type: "LOADED" };
};
