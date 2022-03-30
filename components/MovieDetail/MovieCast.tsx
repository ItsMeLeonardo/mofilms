import { useState, useEffect } from "react";
import { Grid, Col, Text, Card, Row, Avatar, Button } from "@nextui-org/react";
import { Heart2 } from "react-iconly";

//utils
import { useNearScreen } from "hooks/useNearScreen";
import movieService from "services/movies";
import imageService from "services/images";
// types
import { Cast } from "services/movies/credits/types";
import { MovieCardProps } from "./types";

export default function MovieCast({ id }: MovieCardProps) {
  const [castData, setCastData] = useState<Cast[]>(null);

  const { elementRef: castRef, isNearScreen: isNearScreen } = useNearScreen();

  useEffect(() => {
    if (isNearScreen) {
      movieService.credits(id.toString()).then((data) => {
        setCastData(data.cast);
      });
    }
  }, [isNearScreen, id]);

  return (
    <>
      {/* Cast */}
      <Grid xs={12} sm={3.5} md={3}>
        <Col>
          <Text h5 size="1.5rem">
            Cast
          </Text>
          {castData && (
            <section className="cast-list">
              {castData
                .slice(0, 10)
                .map(({ id, name, profile_path, character }) => (
                  <Card
                    clickable
                    hoverable
                    key={id}
                    css={{ my: ".5rem", maxW: "310px" }}
                  >
                    <Row align="center" css={{ gap: ".5rem" }}>
                      <Avatar
                        size="lg"
                        squared
                        bordered
                        color="gradient"
                        src={imageService.profile.w45(profile_path)}
                      />
                      <Col>
                        <Text color="primary" weight="bold">
                          {name}
                        </Text>
                        <Text>{character}</Text>
                      </Col>
                      <Button
                        rounded
                        auto
                        color="primary"
                        light
                        icon={<Heart2 />}
                        css={{ aspectRatio: "1" }}
                      />
                    </Row>
                  </Card>
                ))}
            </section>
          )}
        </Col>
        <span ref={castRef}>{/* this is a flag to hook show actor cast*/}</span>
      </Grid>
      <style jsx>{`
        .cast-list {
          height: 100%;
          max-height: 500px;
          overflow: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
      `}</style>
    </>
  );
}
