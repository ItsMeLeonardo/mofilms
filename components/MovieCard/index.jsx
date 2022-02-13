import { Grid, Card, Col, Text, Row } from "@nextui-org/react";
import { Star } from "react-iconly";

import { addZeroToNumber } from "../../utils/formatString";

const defaultPoster =
  "https://64.media.tumblr.com/a36311872444e745d703353dd12f9c85/1d81862d4bac390e-69/s1280x1920/2c160bfc7a32ca6aeb0f17c36bb224031c46f8d9.jpg";

const overlayGradient = "linear-gradient(180deg, $gray900 -15%, transparent)";

export default function MovieCard({
  title = "",
  rate = 0,
  rank = "01",
  poster = defaultPoster,
  date = "",
  backdropImg = "",
} = {}) {
  const isTheFirst = rank === 1;
  return (
    <>
      <Grid xs={12} sm={isTheFirst ? 6 : 3}>
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
              <Text
                color="white"
                weight="bold"
                css={{
                  p: ".5rem",
                  bgBlur: "#e1e1e1",
                  lineHeight: "$sm",
                  borderRadius: "0 .75rem 0 .75rem",
                  border: "1px solid rgba(255,255,255,.5)",
                }}
              >
                {addZeroToNumber(rank, 2)}
              </Text>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Image
              src={(isTheFirst && backdropImg) || poster}
              height={400}
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
                    maxWidth: isTheFirst ? "100%" : "18ch",
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
      <style jsx>{``}</style>
    </>
  );
}
