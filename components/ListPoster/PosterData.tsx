import { Text, Row, Button } from "@nextui-org/react";
import NextLink from "next/link";
import { Calendar, Star, People } from "react-iconly";
//utils
import { formatDate } from "utils/formatDate";
//types
import { PosterDataProps } from "./types";

export default function PosterData({
  votes,
  releaseDate,
  rate,
  id,
  overview,
}: PosterDataProps) {
  return (
    <>
      <Row gap={0.5}>
        <Calendar />
        <Text h3 size="1rem">
          {formatDate(releaseDate)}
        </Text>
      </Row>
      <Row>
        <Row gap={0.5} align="center">
          <People stroke="bold" />
          <Text size={16} weight="bold" css={{ lineHeight: 0 }}>
            {votes} votes
          </Text>
        </Row>
        <Row gap={0.5} align="center">
          <Star stroke="bold" />
          <Text size={16} weight="bold" css={{ lineHeight: 0 }}>
            {rate} / 10
          </Text>
        </Row>
      </Row>
      <div className="poster-description">
        <Text size="14px" css={{ lineHeight: "1.25", letterSpacing: "0" }}>
          {overview}
        </Text>
      </div>
      <Row justify="space-between" css={{ gap: "1rem" }}>
        <NextLink href={`/movies/${id}`}>
          <Button auto as="a" shadow color="gradient" css={{ flexGrow: 1 }}>
            Details
          </Button>
        </NextLink>
        <Button auto flat css={{ flexGrow: 1 }}>
          Watch
        </Button>
      </Row>
      <style jsx>{`
        .poster-description {
          display: none;
        }
        @media (min-width: 640px) {
          .poster-description {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
