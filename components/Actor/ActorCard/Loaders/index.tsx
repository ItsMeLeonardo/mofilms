import { useTheme } from "@nextui-org/react";
import ContentLoader from "react-content-loader";

export default function ActorCardLoader() {
  const { theme } = useTheme();
  const backgroundColor = theme.colors.accents2.value;
  const foregroundColor = theme.colors.accents3.value;

  return (
    <ContentLoader
      speed={2}
      width={167}
      height={250}
      viewBox="0 0 167 250"
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
    >
      <rect x="0" y="0" rx="4" ry="4" width="167" height="250" />
    </ContentLoader>
  );
}
