import { Text } from "@nextui-org/react";

const overlayPositionInDeg = {
  bottom: "180deg",
  top: "0deg",
  left: "270deg",
  right: "90deg",
};

const titlePosterCss = {
  textShadow: "0 .25rem 1rem rgba(0,0,0,.75)",
  lineHeight: "1.15",
  letterSpacing: "0",
  "@md": { fontSize: "3rem", whiteSpace: "nowrap" },
};

export default function DetailPoster({
  poster,
  overlayPosition = "bottom",
  title = "",
} = {}) {
  return (
    <>
      <section className="poster">
        <div className="poster-data">
          <Text h2 size="3rem" weight="medium" css={titlePosterCss}>
            {title}
          </Text>
        </div>
      </section>
      <style jsx>{`
        .poster {
          width: 100%;
          height: 90vh;
          max-height: 720px;
          background-color: red;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          background: url(${poster}) no-repeat center center/cover;
        }
        .poster::after,
        .poster::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .poster::after {
          background: linear-gradient(
            ${overlayPositionInDeg[overlayPosition]},
            transparent,
            #111
          );
        }
        .poster::before {
          background: transparent;
        }
        .poster-data {
          width: 100%;
          max-width: 400px;
          padding: 1rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
          z-index: 10;
        }
        @media (min-width: 640px) {
          .poster-data {
            width: 50%;
            justify-content: center;
          }
        }
        @media (min-width: 1200px) {
          .poster::before {
            background: linear-gradient(90deg, #111, transparent, #111);
          }
        }
      `}</style>
    </>
  );
}
