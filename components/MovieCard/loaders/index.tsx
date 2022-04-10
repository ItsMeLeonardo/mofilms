import { useTheme } from "@nextui-org/react";
import ContentLoader from "react-content-loader";

export function BackdropLoader() {
  const { theme } = useTheme();
  const backgroundColor = theme.colors.accents2.value;
  const foregroundColor = theme.colors.accents3.value;
  return (
    <ContentLoader
      speed={2}
      width={550}
      height={400}
      viewBox="0 0 550 400"
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
    >
      <rect x="0" y="0" rx="20" ry="20" width="550" height="400" />
    </ContentLoader>
  );
}

export function PosterLoader() {
  const { theme } = useTheme();
  const backgroundColor = theme.colors.accents2.value;
  const foregroundColor = theme.colors.accents3.value;
  return (
    <ContentLoader
      speed={2}
      width={270}
      height={400}
      viewBox="0 0 270 400"
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
    >
      <rect x="0" y="0" rx="20" ry="20" width="270" height="400" />
    </ContentLoader>
  );
}
