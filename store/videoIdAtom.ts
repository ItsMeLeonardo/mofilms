import { atom } from "jotai";

export const videoIdAtom = atom<string>("");

export const setVideoIdAtom = atom(null, (get, set, data: string) => {
  set(videoIdAtom, () => data);
});

export const deleteVideoIdAtom = atom(null, (get, set) => {
  set(videoIdAtom, () => "");
});
