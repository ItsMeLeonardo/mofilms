import ContentLoader from "react-content-loader";

export function BackdropLoader() {
  return (
    <ContentLoader
      speed={2}
      width={550}
      height={400}
      viewBox="0 0 550 400"
      backgroundColor="#d4d4d4"
      foregroundColor="#c7c7c7"
    >
      <rect x="0" y="0" rx="20" ry="20" width="550" height="400" />
    </ContentLoader>
  );
}

export function PosterLoader() {
  return (
    <ContentLoader
      speed={2}
      width={270}
      height={400}
      viewBox="0 0 270 400"
      backgroundColor="#d4d4d4"
      foregroundColor="#c7c7c7"
    >
      <rect x="0" y="0" rx="20" ry="20" width="270" height="400" />
    </ContentLoader>
  );
}
