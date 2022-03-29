import { useResponsive } from "hooks/useResponsive";
import { createImageUrl } from "services/images/createImageUrl";

//types
import { MediaType } from "services/images/types";

export const useResponsiveImage = (path: string, mediaType: MediaType) => {
  const { currentScreen, widthScreen } = useResponsive();
  const imageUrl = createImageUrl({
    path,
    mediaType,
    screenWidth: currentScreen,
  });

  return { imageUrl, widthScreen };
};
