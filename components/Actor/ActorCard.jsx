import { Tooltip, Text, Avatar, Grid } from "@nextui-org/react";
import ActorInfoCard from "./ActorInfoCard";
import { formatImageUrl } from "../../services/formatImageUrl";

export default function ActorCard({
  profile_path,
  name,
  advanced,
  known_for = [],
} = {}) {
  const photo = formatImageUrl(profile_path);
  let movies = null;

  if (advanced) {
    movies = known_for.slice(0, 3).map(({ id, title, poster_path }) => ({
      id,
      title,
      backdropImg: formatImageUrl(poster_path),
    }));
  }

  return (
    <Grid justify="center" align="center" css={{ py: ".75rem" }}>
      <Tooltip
        content={<ActorInfoCard photo={photo} movies={movies} />}
        css={{ bgBlur: ".5rem", bg: "rgba(51,51,51,.65)" }}
      >
        <Avatar
          src={formatImageUrl(profile_path)}
          squared
          css={{ size: "$20" }}
        />
        <Text
          h6
          css={{
            mt: ".5rem",
            maxWidth: "$20",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Text>
      </Tooltip>
    </Grid>
  );
}
