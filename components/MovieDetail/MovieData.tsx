import { Grid, Col, Text, Row, Spacer } from "@nextui-org/react";
import { Calendar, Ticket, TimeCircle, Voice, Wallet } from "react-iconly";
//utils
import { formatCurrency } from "utils/formatCurrency";
import { formatDate } from "utils/formatDate";
//types
import type { MovieDataProps } from "./types";

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
          <section className="detailContainer">
            <Text h5 size="1.5rem">
              Details
            </Text>
            <div className="detailText">
              <TimeCircle />
              <Text b>Duration: </Text>
              {movie.runtime} minutes
            </div>
            <div className="detailText">
              <Voice />
              <Text b>Language: </Text>
              {movie.original_language}
            </div>
            <div className="detailText">
              <Wallet />
              <Text b>budget: </Text>
              {formatCurrency(movie.budget)}
            </div>
            <div className="detailText">
              <Ticket />
              <Text b>Revenue: </Text>
              {formatCurrency(movie.revenue)}
            </div>
            <div className="detailText">
              <Calendar />
              <Text b>Release date: </Text>
              <Text>
                {formatDate(movie.release_date, { dateStyle: "medium" })}
              </Text>
            </div>
          </section>
          {/* overview */}
          {movie.overview.length > 0 && (
            <Col css={{ mt: ".5rem", maxW: "90%" }}>
              <Text h5 size="1.5rem">
                Storyline
              </Text>
              <Text>{movie.overview}</Text>
            </Col>
          )}
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
        .detailContainer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .detailText {
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
        }
      `}</style>
    </>
  );
}
