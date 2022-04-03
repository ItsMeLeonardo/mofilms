import { Container, CSS } from "@nextui-org/react";
import Navbar from "components/Navbar";

//components
import Portal from "components/helpers/Portal";
import VideoCard from "components/VideoCard";

//utils
import { useInitializeWindowListener } from "hooks/useResponsive/useInitializeWindowListener";
import { useVideoId } from "hooks/useVideoId";

const containerCss: CSS = {
  p: ".5rem .5rem $20 .5rem",
  background: "$gray900",
  minHeight: "100vh",
  "@sm": {
    pb: "0",
  },
};

export default function Layout({ children }) {
  useInitializeWindowListener();
  const { videoId, resetVideoId } = useVideoId();

  const hasVideoId = !!videoId;

  return (
    <Container md className="container" css={containerCss}>
      <Navbar />
      <main>
        {hasVideoId && (
          <Portal>
            <VideoCard movieId={videoId} onClose={resetVideoId} />
          </Portal>
        )}
        {children}
      </main>
    </Container>
  );
}
