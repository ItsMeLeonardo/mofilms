import { useEffect, useState } from "react";
import YouTube, { Options } from "react-youtube";
//utils
import movieService from "services/movies";
//types
interface Props {
  movieId: string | number;
  onClose?: () => void;
}

//react youtube
const options: Options = {
  playerVars: {
    mute: 1,
    modestbranding: 1,
    autoplay: 1,
  },
};

export default function VideoCard({ movieId, onClose = () => {} }: Props) {
  const [showCard, setShowCard] = useState(true);
  const [videoId, setVideoId] = useState<string>(null);

  useEffect(() => {
    // Drag the video card
    const moveBar = document.querySelector<HTMLDivElement>("#moveBar");
    const videoContainer = document.querySelector<HTMLSelectElement>(
      "#videoCardContainer"
    );

    const moveCard = (event: MouseEvent) => {
      event.stopPropagation();
      let shiftX = event.clientX - moveBar.getBoundingClientRect().left;
      // let shiftY = event.clientY - moveBar.getBoundingClientRect().top;

      function moveAt(pageX: number, pageY: number) {
        videoContainer.style.left = `${pageX - shiftX}px`;
        // videoContainer.style.top = `${pageY - shiftY}px`;
      }

      moveAt(event.pageX, event.pageY);

      function onMouseMove(event: MouseEvent) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener("mousemove", onMouseMove);

      moveBar.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", onMouseMove);
      });
    };

    moveBar.addEventListener("mousedown", moveCard);

    return () => {
      moveBar.removeEventListener("mousedown", moveCard);
    };
  }, []);

  useEffect(() => {
    movieService.video(movieId.toString()).then((video) => {
      setVideoId(video.key);
    });
  }, []);

  const closeCard = () => {
    setShowCard(false);
    onClose();
  };

  if (!showCard) {
    return null;
  }

  return (
    <>
      <section
        id="videoCardContainer"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="move-bar" id="moveBar">
          <i className="gg-arrow-align-h"></i>
          <button className="close-card" onClick={closeCard}>
            <i className="gg-close"></i>
          </button>
        </div>
        {videoId ? (
          <YouTube
            videoId={videoId}
            id="cardVideo"
            className="video"
            opts={options}
            containerClassName="video-container"
          />
        ) : (
          <div className="video-container">
            <h3>Video not available </h3>
          </div>
        )}
      </section>

      <style jsx>{`
        @import url("https://css.gg/close.css");
        @import url("https://css.gg/arrow-align-h.css");
        section {
          position: fixed;
          top: 80px;
          right: 16px;
          z-index: 1000;
          width: 100%;
          max-width: 320px;
          aspect-ratio: 16/10;
          background: #333;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0.5rem 1rem 1.5rem rgba(51, 51, 51, 0.5);
        }
        .move-bar {
          width: 100%;
          height: 10%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          cursor: move;
          max-height: 1.25rem;
        }
        .close-card {
          height: 100%;
          position: absolute;
          right: 0.125rem;
          cursor: pointer;
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
        }
        .close-card .gg-close {
          transform: scale(0.75);
        }
      `}</style>
    </>
  );
}
