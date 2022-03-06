import { useEffect, useState } from "react";
import YouTube from "react-youtube";

export default function VideoCard({ videoId } = {}) {
  const [showCard, setShowCard] = useState(true);

  useEffect(() => {
    const moveBar = document.querySelector("#moveBar");
    const videoContainer = document.querySelector("#videoCardContainer");

    const moveCard = (event) => {
      let shiftX = event.clientX - moveBar.getBoundingClientRect().left;
      let shiftY = event.clientY - moveBar.getBoundingClientRect().top;

      function moveAt(pageX, pageY) {
        videoContainer.style.left = `${pageX - shiftX}px`;
        videoContainer.style.top = `${pageY - shiftY}px`;
      }

      moveAt(event.pageX, event.pageY);

      function onMouseMove(event) {
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

  if (!showCard) {
    return null;
  }

  return (
    <>
      <section id="videoCardContainer">
        <div className="move-bar" id="moveBar">
          <b></b>
          <button className="close-card" onClick={() => setShowCard(false)}>
            <i className="gg-close"></i>
          </button>
        </div>
        {videoId ? (
          <YouTube
            videoId={videoId}
            id="cardVideo"
            className="video"
            opts={{
              playerVars: {
                mute: 1,
                modestbranding: 1,
              },
            }}
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
        section {
          position: absolute;
          top: 60px;
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
        .move-bar b {
          --size: 0.25rem;
          width: var(--size);
          height: var(--size);
          background: var(--nextui-colors-accents7);
          border-radius: 50%;
          box-shadow: 0.5rem 0 0rem var(--nextui-colors-accents7),
            -0.5rem 0 0rem var(--nextui-colors-accents7);
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
