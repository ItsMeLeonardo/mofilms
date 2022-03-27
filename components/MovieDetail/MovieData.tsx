import { Grid, Col, Text, Row, Spacer } from "@nextui-org/react";
//utils
import { formatCurrency } from "utils/formatCurrency";
import { formatDate } from "utils/formatDate";
//types
import { MovieDataProps } from "./types";

export default function MovieData({ movie }: MovieDataProps) {
  return (
    <>
      <Grid xs={12} sm={6.5} md={7}>
        <Col>
          <Text h2>{movie.original_title}</Text>
          <Text>{movie.tagline}</Text>
          {/* genres */}
          <Row wrap="wrap">
            {movie.genres.map(({ id, name }) => (
              <span key={id} className="poster-genre">
                {name}
              </span>
            ))}
          </Row>
          <Spacer />
          {/* details */}
          <Col>
            <Text h5 size="1.5rem">
              Details
            </Text>
            <Text>
              <Text b>Duration: </Text>
              {movie.runtime} minutes
            </Text>
            <Text>
              <Text b>Language: </Text>
              {movie.original_language}
            </Text>
            <Text>
              <Text b>budget: </Text>
              {formatCurrency(movie.budget)}
            </Text>
            <Text>
              <Text b>Revenue: </Text>
              {formatCurrency(movie.revenue)}
            </Text>
            <Text>
              <Text b>Release date: </Text>
              {formatDate(movie.release_date, { dateStyle: "medium" })}
            </Text>
          </Col>
          {/* overview */}
          <Col css={{ mt: ".5rem", maxW: "90%" }}>
            <Text h5 size="1.5rem">
              Storyline
            </Text>
            <Text>{movie.overview}</Text>
          </Col>
        </Col>
      </Grid>
      <style jsx>{`
        .poster-genre {
          font-size: 0.75rem;
          color: #fff;
          border-radius: 10rem;
          padding: 0.5rem 1rem;
          margin: 0.25rem 0.5rem 0.25rem 0;
          border: solid 1px #fff;
          text-transform: uppercase;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
}
