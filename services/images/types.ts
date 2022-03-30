import { ScreenTypes } from "store/responsiveAtom";

export type MediaType = "poster" | "backdrop" | "logo" | "still" | "profile";

export interface createUrlParams {
  path: string;
  mediaType: MediaType;
  screenWidth: ScreenTypes;
}

export interface urlByScreen {
  path: string;
  screenWidth: ScreenTypes;
}
