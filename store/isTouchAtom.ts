import { atom } from "jotai";

//atoms
export const isTouchAtom = atom<boolean>(false);

export const setIsTouchAtom = atom(null, (get, set, data: boolean) => {
  set(isTouchAtom, data);
});
