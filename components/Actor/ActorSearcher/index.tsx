import { useState, ChangeEvent } from "react";
import { Grid, Row, Spacer, Input } from "@nextui-org/react";
import { Search } from "react-iconly";

//components
import ActorCard from "components/Actor/ActorCard";
import ActorSearcherHeader from "./ActorSearcherHeader";
import ActorCardListLoader from "components/Actor/ActorSearcher/loaders";
//utils
import { useActorSearch } from "hooks/useActorSearch";
import { debounce } from "utils/debounce";

export default function ActorSearcher() {
  const [keyword, setKeyword] = useState("");
  const { data, isLoading } = useActorSearch({ keyword });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value.trim();
    setKeyword(keyword);
  };

  const actors = data?.results;

  const debouncedHandleChange = debounce(handleChange, 600);
  return (
    <>
      <div>
        <ActorSearcherHeader />
        <Row align="center" justify="center">
          <Input
            type="search"
            placeholder="Brad Pitt"
            id="search-actor"
            contentRight={<Search />}
            fullWidth
            onChange={debouncedHandleChange}
            css={{ maxW: "400px" }}
          />
        </Row>
        <Spacer />

        {isLoading ? (
          <ActorCardListLoader length={10} />
        ) : (
          <Grid.Container
            gap={1}
            alignItems="center"
            justify="center"
            css={{ w: "100%" }}
          >
            {actors &&
              actors.map((actor) => (
                <ActorCard key={actor.id} actor={actor} advancedData />
              ))}
          </Grid.Container>
        )}
      </div>
    </>
  );
}
