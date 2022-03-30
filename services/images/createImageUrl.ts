import ImageService from "services/images";
import { createUrlParams, urlByScreen } from "./types";

const getBackdropUrls = (params: urlByScreen) => {
  const { path, screenWidth } = params;
  switch (screenWidth) {
    case "xs":
    case "sm":
      return ImageService.backdrop.w300(path);
    case "md":
    case "lg":
      return ImageService.backdrop.w780(path);
    case "xl":
    case "xl2":
      return ImageService.backdrop.w1280(path);
    case "max":
      return ImageService.backdrop.original(path);
    default:
      throw new Error("Invalid screen width");
  }
};

const getLogoUrls = (params: urlByScreen) => {
  const { path, screenWidth } = params;
  switch (screenWidth) {
    case "xs":
      return ImageService.logo.w45(path);
    case "sm":
      return ImageService.logo.w92(path);
    case "md":
      return ImageService.logo.w154(path);
    case "lg":
    case "xl":
    case "xl2":
      return ImageService.logo.w300(path);
    case "max":
      return ImageService.logo.original(path);
    default:
      throw new Error("Invalid screen width");
  }
};

const getProfileUrls = (params: urlByScreen) => {
  const { path, screenWidth } = params;
  switch (screenWidth) {
    case "xs":
      return ImageService.profile.w45(path);
    case "sm":
    case "md":
      return ImageService.profile.w185(path);
    case "lg":
    case "xl":
    case "xl2":
      return ImageService.profile.h632(path);
    case "max":
      return ImageService.profile.original(path);
    default:
      throw new Error("Invalid screen width");
  }
};

const getPosterUrls = (params: urlByScreen) => {
  const { path, screenWidth } = params;
  switch (screenWidth) {
    case "xs":
      return ImageService.poster.w92(path);
    case "sm":
      return ImageService.poster.w154(path);
    case "md":
      return ImageService.poster.w185(path);
    case "lg":
      return ImageService.poster.w342(path);
    case "xl":
      return ImageService.poster.w500(path);
    case "xl2":
      return ImageService.poster.w780(path);
    case "max":
      return ImageService.poster.original(path);
    default:
      throw new Error("Invalid screen width");
  }
};

const getStillUrls = (params: urlByScreen) => {
  const { path, screenWidth } = params;
  switch (screenWidth) {
    case "xs":
    case "sm":
      return ImageService.still.w92(path);
    case "md":
    case "lg":
      return ImageService.still.w185(path);
    case "xl":
    case "xl2":
      return ImageService.still.w300(path);
    case "max":
      ImageService.still.original(path);
    default:
      throw new Error("Invalid screen width");
  }
};

export const createImageUrl = (params: createUrlParams) => {
  const { path, mediaType, screenWidth } = params;
  switch (mediaType) {
    case "backdrop":
      return getBackdropUrls({ path, screenWidth });
    case "logo":
      return getLogoUrls({ path, screenWidth });
    case "profile":
      return getProfileUrls({ path, screenWidth });
    case "poster":
      return getPosterUrls({ path, screenWidth });
    case "still":
      return getStillUrls({ path, screenWidth });
    default:
      throw new Error("Invalid media type");
  }
};
