import { Grid, Card, Col, Text, Row } from "@nextui-org/react";
import { Star } from "react-iconly";

const defaultPoster =
  "https://64.media.tumblr.com/a36311872444e745d703353dd12f9c85/1d81862d4bac390e-69/s1280x1920/2c160bfc7a32ca6aeb0f17c36bb224031c46f8d9.jpg";

const overlayGradient = "linear-gradient(180deg, $gray900 -15%, transparent)";

export default function MovieCard({
  title = "",
  rate = 0,
  badge = null,
  poster = defaultPoster,
  date = "",
  backdropImg = "",
  size = 3,
  h = 400,
} = {}) {
  const isRectangle = size > 4;
  return (
    <>
      <Grid xs={12} sm={size}>
        <Card hoverable clickable cover css={{ w: "100%" }}>
          <Card.Header
            css={{
              position: "absolute",
              zIndex: 1,
              top: 0,
              background: overlayGradient,
            }}
          >
            <Row align="center" justify="flex-end">
              {badge && <span className="badge">{badge}</span>}
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Image
              src={(isRectangle && backdropImg) || poster}
              height={h}
              width="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            blur
            css={{
              position: "absolute",
              bgBlur: "#0f1114",
              borderRadius: ".75rem",
              bottom: 0,
              zIndex: 1,
              p: "12px",
            }}
          >
            <Row align="center">
              <Col>
                <Text
                  h2
                  color="#FFF"
                  size="1rem"
                  css={{
                    whiteSpace: "nowrap",
                    maxWidth: isRectangle ? "100%" : "18ch",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
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
                    {rate}
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
