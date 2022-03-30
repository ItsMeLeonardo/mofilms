import { atom } from "jotai";

//types
export interface ResponsiveAtom {
  widthScreen: number;
  currentScreen: ScreenTypes;
}

export type ScreenTypes = "xs" | "sm" | "md" | "lg" | "xl" | "xl2" | "max";

//atoms
export const responsiveAtom = atom<ResponsiveAtom>({
  widthScreen: 0,
  currentScreen: "md",
});

export const setResponsiveAtom = atom(
  null,
  (get, set, data: ResponsiveAtom) => {
    set(responsiveAtom, () => data);
  }
);
