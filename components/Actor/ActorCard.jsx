import { Tooltip, Text, Avatar, Grid } from "@nextui-org/react";
import ActorInfoCard from "./ActorInfoCard";
import { formatImageUrl } from "../../services/formatImageUrl";

export default function ActorCard({ profile_path, name }) {
  return (
    <Grid justify="center" align="center" css={{ py: ".75rem" }}>
      <Tooltip content={<ActorInfoCard photo={formatImageUrl(profile_path)} />}>
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
