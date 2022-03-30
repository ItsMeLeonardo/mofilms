import { memo } from "react";
import { useRouter } from "next/router";
import { Grid, Card, Col, Text, Row, CSS } from "@nextui-org/react";
import { Star } from "react-iconly";

// components
import BtnToSeeTrailer from "./BtnToSeeTrailer";
// utils
import { useResponsive } from "hooks/useResponsive";
import imageService from "services/images";
//types
import { MovieCardProps, defaultProps } from "./types";

//nextUI css
const cardHeaderCss: CSS = {
  position: "absolute",
  zIndex: 1,
  top: 0,
  background: "linear-gradient(180deg, $gray900 -15%, transparent)",
};

const cardFooterCss: CSS = {
  position: "absolute",
  bgBlur: "#0f1114",
  borderRadius: ".75rem",
  bottom: 0,
  zIndex: 1,
  p: "12px",
};

const cardMovieTitleCss = (isRectangle: boolean): CSS => ({
  whiteSpace: "nowrap",
  maxWidth: isRectangle ? "100%" : "16ch",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: "#FFF",
});

function MovieCard({
  id,
  title,
  rate,
  badge,
  poster,
  date,
  backdrop,
  cols = 3,
  h = 400,
  className = "",
}: MovieCardProps = defaultProps) {
  const router = useRouter();
  const { widthScreen, currentScreen } = useResponsive();
  const handleClick = () => {
    router.push(`/movies/${id}`);
  };

  const isRectangle = cols > 4;
  const posterUrl = imageService.poster.w185(poster);
  const backdropUrl = imageService.backdrop.w300(backdrop);
  return (
    <>
      <Grid
        xs={12}
        sm={3}
        md={cols}
        onClick={handleClick}
        className={className}
      >
        <Card hoverable clickable cover css={{ w: "100%" }}>
          <Card.Header css={cardHeaderCss}>
            <BtnToSeeTrailer movieId={id} />
            {badge && (
              <Row align="center" justify="flex-end">
                <span className="badge">{badge}</span>
              </Row>
            )}
          </Card.Header>
          <Card.Body>
            <Card.Image
              src={(isRectangle && backdropUrl) || posterUrl}
              height={h}
              width="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer blur css={cardFooterCss}>
            <Row align="center">
              <Col>
                <Text h2 size="1rem" css={cardMovieTitleCss(isRectangle)}>
                  {title}
                </Text>
                <Text color="#d1d1d1" size={12}>
                  {date}
                </Text>
              </Col>
              <Col css={{ width: "auto" }}>
                <Row gap={0.5} justify="flex-end" align="center">
                  <Star stroke="bold" />
                  <Text size={14} weight="bold" css={{ lineHeight: 0 }}>
                    {Number(rate).toFixed(1)}
                  </Text>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>

      <style jsx>{`
        .badge {
          display: flex;
          align-items: center;
          padding: 0.5rem;
          border-radius: 0.25rem 0.75rem 0.25rem 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background: #e1e1e166;
          backdrop-filter: saturate(180%) blur(10px);
          gap: 0.25rem;
        }
      `}</style>
    </>
  );
}

export default memo(MovieCard, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title;
});
