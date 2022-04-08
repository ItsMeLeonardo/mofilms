import { useRouter } from "next/router";
import { Grid, Card, CSS } from "@nextui-org/react";

//utils
import ImageService from "services/images";

//types
import { KnownFor, MediaType } from "services/actors/types/knowFor";

interface Props {
  knownFor: KnownFor;
  index: number;
}

//nextui css
const cardImageCss: CSS = {
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

const cardTvCss: CSS = {
  cursor: "not-allowed",
};

export default function KnownForCard({ knownFor, index }: Props) {
  const router = useRouter();

  const { id, backdrop_path, title, media_type } = knownFor;
  const isMovie = media_type === MediaType.Movie;

  const goToMovie = () => {
    if (isMovie) {
      router.push(`/movies/${id}`);
    } else {
      // router.push(`/tv/${id}`);
    }
  };

  return (
    <Grid key={id} xs={index == 0 ? 12 : 6}>
      <Card.Image
        showSkeleton
        css={isMovie ? cardImageCss : cardTvCss}
        onClick={goToMovie}
        width="100%"
        height={80}
        objectFit="cover"
        src={ImageService.backdrop.w300(backdrop_path)}
        alt={title}
      />
    </Grid>
  );
}
